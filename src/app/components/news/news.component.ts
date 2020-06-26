import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
 //public title = "我是一个新闻组件-----" public可以省略
  title = "我是一个新闻组件-----"
  public msg:string = "我是一条msg"
  //推荐这种写法
   public student:string = "我是一个学生"
   public userInfo:any = {
     name:"keven",
     age:'18'
   }
   public message:any
   public content:string = "<h2>我是一个html标签</h2>"

  //推荐
   public arr:any[] = ['111','222','333']

   public userList:any[] = [
     {
       username:"张三",
       age:20
     },{
       username:'李四',
       age:21
     },{
       username:'王五',
       age:22
     }
   ]

   public carList:any[] = [
     {
       cate:"宝马",
       list:[
         {
           title:'宝马x1',
           price:'30万'
         },
         {
           title:'宝马x1',
           price:'30万'
         },{
           title:'宝马x1',
           price:'30万'
         }
       ]
     },
       {
       cate:"奥迪",
       list:[
         {
           title:'奥迪x1',
           price:'30万'
         },
         {
           title:'奥迪x1',
           price:'30万'
         },{
           title:'奥迪x1',
           price:'30万'
         }
       ]
     }
   ]
   /*
      声明属性的几种方式
      public 共有（默认）可以在这个类使用，也可以在类外面使用
      protected 保护类型 他只有在当前类和他的子类里面可以访问
      private 私有 只有在当前类才可以访问这个属性
   */
  constructor() {
    this.message = "这是给属性赋值，也叫改变属性的值"
    console.log(this.msg)//获取属性的值
    this.msg = "我是改变后的msg的值"//改变属性的值
  }

  ngOnInit(): void {
  }

}
