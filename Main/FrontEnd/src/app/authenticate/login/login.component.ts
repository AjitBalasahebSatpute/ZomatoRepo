import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';


interface logInDetails{
  contactNumber:number;
  countryCode:number;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userInput!:logInDetails;
  clicked:boolean=false;

  onSubmit(Data:NgForm){
    console.log(Data);
    console.log("clicked")
  }

  OTPGeneration(){
    this.clicked=true
  }

}
