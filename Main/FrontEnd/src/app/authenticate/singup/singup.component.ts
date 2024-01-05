import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AuthService } from '../../Services/AuthService';


export interface SingUpData{
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

  userinput !:SingUpData;
  isAgree:boolean=false;
  isverification:boolean=false;
  constructor(private service:AuthService){
    // this.userinput={username:"Amruta",email:'Amruta@gmail.com',agree:true};
    // console.log(this.agree);
                
  }

 
  OnSingup(Data:NgForm){
    this.userinput={username:Data.value.userdetails.username,email:Data.value.userdetails.email,agree:Data.value.agree};
    this.service.singupCheck(this.userinput).subscribe(
      (response)=>{
        console.log("Data packate proccessed successfully",response)
      },
      (error:Error)=>{  
        console.log("Encounterred Error" + error.message)
      }
      )
  }

  agree(){
    this.isAgree !=this.isAgree ;
  }
}
