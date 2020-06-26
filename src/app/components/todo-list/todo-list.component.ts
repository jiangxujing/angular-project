import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service'
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public keyword:string=""
  public todolist:any[] = []
  //相当于实例化storage
  constructor(public storage:StorageService) { }

  ngOnInit(): void {
      console.log(this.storage)
   this.todolist = this.storage.get('todolist')
  }
checkboxChange(){
  console.log('触发了吗')
    this.storage.set('todolist', this.todolist)
}
  doAdd(e){
      if(e.keyCode == 13){
        console.log(this.todolistHasKeyword(this.todolist,this.keyword))
          if(!this.todolistHasKeyword(this.todolist,this.keyword)){
                this.todolist.push({
                title:this.keyword,
                status:0
              })
             this.storage.set('todolist', this.todolist)

               this.keyword = ''
          }

      }
  }
  todolistHasKeyword(todolist:any,keyword:any){
      if(!keyword) return true
    let len = todolist.length;
      for(let i=0;i<len;i++){
          if(todolist[i].title == keyword){
             return true
          }
      }
      return false;
  }
deleteData(key){
  this.todolist.splice(key,1)
}
}
