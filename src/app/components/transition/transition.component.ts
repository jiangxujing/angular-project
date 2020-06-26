import { Component, OnInit } from '@angular/core';
 import { RequestService } from '../../services/request.service'
 import {map,filter} from 'rxjs/operators';
/*父组件给子组件传值，总共两步
  1、父组件定义属性<app-header [title]="title"></app-header>
  2、父组件给属性赋值 public title:string = "我是动画组件"
  3、子组件引入Input import { Component, OnInit,Input } from '@angular/core';
  4、子组件 @Input() title:any;
  5、子组件可以拿到父组件传过来的值了<h2>{{title}}</h2>
  */
@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.css']
})
export class TransitionComponent implements OnInit {
  public openShow:Boolean = true
  public title:string = "我是动画组件"
  public msg:string = "我是父组件的msg"

  constructor( public request:RequestService ) {

  }

  ngOnInit(): void {
    //同步方法
    this.request.getData()

    //callback获取异步数据
    this.request.getCallbackData(data=>{
      console.log(data)
    })

    //promise获取异步数据
    let promiseData = this.request.getPromiseData()
    promiseData.then(data=>{
      console.log(data)
    })

//promise没办法执行循环执行返回值
    let promiseIntervalData = this.request.getPromiseIntervalData()
    promiseIntervalData.then(data=>{
      console.log(data)
    })



    //Rxjs获取异步数据
    let rxjsData = this.request.getRxjsData()
    rxjsData.subscribe(data=>{
      //console.log(data)
    })

    //rxjs可以多次循环返回的结果
    let rxjsIntervalData = this.request.getRxjsIntervalData()
    rxjsIntervalData.subscribe(data=>{
      console.log(data)
    })

  //filter可以过滤数据，得到你想要的数据
   let rxjsIntervalNumber = this.request.getRxjsIntervalNumber()
   //管道
   // rxjsIntervalNumber.pipe(
   //filter单独用
   //  filter(value=>{
   //    if(value%2==0){
   //      return true
   //    }
   //  })
   // ).subscribe(data=>{
   //      console.log(data)
   //    })

//       rxjsIntervalNumber.pipe(
//map单独用
//          map(value=>{
//            return value*value
//          })
//         ).subscribe(data=>{
//              console.log(data)
//            })
//

  rxjsIntervalNumber.pipe(
  //filter和map合起来用
       filter(value=>{
         if(value%2==0){
           return true
         }
       }),
         map(value=>{
           return value*value
         })
        ).subscribe(data=>{
             console.log(data)
           })

    //rxjs方法跟promise方法类似,但是rxjs方法可以中途撤回
    let streem = this.request.getRxjsData()
    let d = streem.subscribe(data=>{
      console.log(data)
    })
    setTimeout(()=>{
      d.unsubscribe()//取消订阅，也就是撤回
    },10)




  }
  open(){
    let dom:any = document.getElementById('aside')
    dom.style.transform = 'translate(0,0)'
    this.openShow = false
  }
  close(){
     let dom:any = document.getElementById('aside')
    dom.style.transform = 'translate(100%,0)'
    this.openShow = true
  }

  public jump(){
    console.log('我是父组件的jump方法')
  }
}
