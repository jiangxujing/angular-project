import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 public pic:string = 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
 public list:any[] = [
   {
     name:'lily1'
   },
   {
     name:'lily2'
   },{
     name:'lily3'
   },{
     name:'lily4'
   },{
     name:'lily5'
   }
 ]
  constructor() { }

  ngOnInit(): void {
  }

}
