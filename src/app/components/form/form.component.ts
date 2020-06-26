import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public peopleInfo:any = {
    username:'lucy',
    sex:'1',
    city:'上海',
    cityList:[
      {
        "city":"北京"
      },{
        "city":"上海"
      },{
        "city":"深圳"
      }
    ],
    hobby:[{
      title:'吃饭',
      checked:false
    },{
      title:'睡觉',
      checked:true
    },{
      title:'敲代码',
      checked:false
    }],
    mark:''
  }
  constructor() { }

  ngOnInit(): void {
  }
  doSubmit(){
    console.log(this.peopleInfo)
  }

}
