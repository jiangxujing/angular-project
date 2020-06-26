import { Injectable } from '@angular/core';
import axios from 'axios'
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor() { }
  get(api){
    return new Promise((resolve,reject)=>{
      axios.get(api).then(res=>{
        resolve(res)
      })
    })
  }
}
