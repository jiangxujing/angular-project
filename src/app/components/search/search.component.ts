import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service'
import { HttpServiceService } from '../../services/http-service.service';//引入http服务
import { HttpClient,HttpHeaders } from '@angular/common/http'
//var storage = new StorageService() //官方不推荐这种引入服务里面方法的方式

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public keyword:string = ''
  public historyList:any[] = []
  public list:any[] = []
    //相当于实例化storage
  constructor(public storage:StorageService,public http:HttpClient,public httpService:HttpServiceService) {
    //console.log(storage.get())
    //this.storage.get()
  }
  getAxiosData(){
     let api = 'http://a.itying.com/api/productlist'
     this.httpService.get(api).then(res=>{
       this.list = res.data.result
       console.log(res.data)
     })
  }
  getHttpData(){
    let api = 'http://a.itying.com/api/productlist'
    //RXJS语法
    this.http.get(api).subscribe(res=>{
      this.list = res.result
    })
  }
  postHttpData(){
     const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
     let api = 'http://127.0.0:3000/doLogin'
     this.http.post(api,{username:'张三',age:'20'},httpOptions).subscribe(res=>{
       console.log(res)
     })
  }
  jsonpHttpData(){
     let api = 'http://a.itying.com/api/productlist'
     this.http.jsonp(api,'callback').subscribe(res=>{
       console.log(res)
     })
  }
  ngOnInit(): void {
    this.historyList = this.storage.get('historylist')?this.storage.get('historylist'):[]
  }
  doSearch(){
    if(this.historyList.indexOf(this.keyword) == -1){
      this.historyList.push(this.keyword)
      this.storage.set('historylist',this.historyList)
      this.keyword = ''
    }
  }
deleteList(key){
  this.historyList.splice(key,1)
  this.storage.remove('historylist')
}
}
