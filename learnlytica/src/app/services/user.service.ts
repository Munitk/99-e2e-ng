import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private myHttp: HttpClient) { }

  getUserList() {
    return this.myHttp.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
  }
  // get UserListFromApi(){
  //   return this.myHttp.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
  // }
  getProfiles() {
    return this.myHttp.get('http://localhost:4200/api/users') 

  }
  submitContactDetails(data:any){

    return this.myHttp.post('http://localhost:4200/api/users/contact',data)
  }

}


