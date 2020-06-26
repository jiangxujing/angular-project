import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }
  getData(){
    console.log('我是requestdata')
  }
  getCallbackData(cb){
    setTimeout(()=>{
      let username = '张三--callback';
      cb(username)
    },100)
  }

  getPromiseData(){
    return new Promise((resolve)=>{
      setTimeout(()=>{
        let userName = "李思--promise"
        resolve(userName)
      },100)
    })
  }

  getRxjsData(){
    return new Observable((observer)=>{
      setTimeout(()=>{
        let username = 'Rxjs--data'
        observer.next(username)
        //observer.error('失败')
      },100)
    })
  }

  //多次执行--promise演示
   getPromiseIntervalData(){
    return new Promise((resolve)=>{
      setInterval(()=>{
        let userName = "李思--promise---interval"
        resolve(userName)
      },100)
    })
  }


 //多次执行--Rxjs演示
    getRxjsIntervalData(){
    return new Observable((observer)=>{
      let count:number =0
      setInterval(()=>{
        count++
        let username = 'Rxjs--data--interval'+count
        observer.next(username)
        //observer.error('失败')
      },2000)
    })
  }

  //rxjs工具类方法
     getRxjsIntervalNumber(){
    return new Observable((observer)=>{
      let count:number =0
      setInterval(()=>{
        count++
        observer.next(count)
        //observer.error('失败')
      },2000)
    })
  }
}
