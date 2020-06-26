import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //接收父组件传来的数据
  @Input() title:any;
    @Input() msg:any;
      @Input() jump:any;
      @Input() home:any;
  constructor() { }

  ngOnInit(): void {
  }
  //遇到一个坑就是，这里不加public时通过viewchild，父组件调用子组件方法时报错，拿不到这个方法，必须加上public
  public run(){
    console.log('我是头部组件的方法')
  }

  //子组件接收父组件传来的方法
  getParentJump (){
   this.jump() //这里是通过父组件的[jump]="jump"传值获得的方法
    console.log(this.home.msg) //这里是通过父组件直接把整个父组件都传过来了，得到的值[home]="this"
    this.home.jump()//这里是通过父组件直接把整个父组件都传过来了，得到的方法[home]="this"
    }
}
