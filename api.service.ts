import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Form } from './form';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 userModel = {
  organization:null,
  city:null,
  skills:null,
  exp:null,
  university:null,
  education:null,
  state:null,
  vlg:null,
  pincode:null,
 }
 userInfo:any;
//  updateUserModel(newData: any) {
//   this.userModel = { ...this.userModel, ...newData };
// }

 
  constructor(private router:Router) {
    console.log(this.userModel,"cvgv");
   }
}
