import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';


interface SingUpData{
  username:string;
  email:string;
  agree:boolean;
}


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css'
})
export class SingupComponent {

  userinput :SingUpData
  isAgree:boolean=false;
  
  constructor(){
    this.userinput={username:"Amruta",email:'Amruta@gmail.com',agree:true};
    // console.log(this.agree);
                
  }

 
  OnSingup(Data:NgForm){

      console.log(Data.value);
  }

  agree(){
    this.isAgree !=this.isAgree ;
  }
}
