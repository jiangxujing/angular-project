// 如何使用ViewChild（作用1\获取dom节点，2\父子组件中通过viewchild调用子组件）
// 1/模板中给dom起一个名字
// <div #mybox>
//   我是view-child
// </div>
// 在组件中引入viewchild
// import { Component, OnInit,ViewChild } from '@angular/core';
// 2/写在类里面 @ViewChild('mybox') mybox:any;
// 4/ngAfterViewInit生命周期函数里面获取dom,this.mybox.nativeElement

import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit {
  //获取一个dom节点
  @ViewChild('mybox') mybox:any;
  //获取子组件实例
    @ViewChild('header') header:any;

  constructor() { }
 //这里还获取不到dom
  ngOnInit(): void {
  }

  //生命周期，视图加载完成，可以获取dom
  ngAfterViewInit():void{
    //原生js控制dom
    let boxDom:any = document.getElementById('mybox');
    boxDom.style.color = 'blue'
    console.log(this.mybox.nativeElement)
    this.mybox.nativeElement.style.width = '100px'
    this.mybox.nativeElement.style.height = '100px'
    this.mybox.nativeElement.style.background = 'red'
    //this.mybox.nativeElement.style.color = '#fff'
    this.header.run()
  }
getChildFun(){
this.header.run()
}
}
