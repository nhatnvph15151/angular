
import { Component, OnInit } from '@angular/core';
import { UserType } from '../model/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
 signin: UserType = {
   email:"",
   password:""
 }

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
   
  }
}
