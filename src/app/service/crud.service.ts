import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  apiurl:String="http://3.109.134.223:3000/"
  
  constructor(private httpData:HttpClient) {
    // console.log(environment);
    }
  postData(routename: string,data: object)
  {

   return this.httpData.post(this.apiurl+routename,data,{
      headers: {
        'Content-Type': 'application/json',
        // 'Cache-Control': 'no-cache',
        'Accept': 'application/json',
      }
    })
  }
  UpdateData(routename: string,data: object)
  {

   return this.httpData.put(this.apiurl+routename,data,{
      headers: {
        'Content-Type': 'application/json',
        // 'Cache-Control': 'no-cache',
        'Accept': 'application/json',
      }
    })
  }
  getData(routename:string)
  {
    return this.httpData.get(this.apiurl+routename);
  }

  delData(routename: string)
  {

   return this.httpData.delete(this.apiurl+routename)
  }
}
