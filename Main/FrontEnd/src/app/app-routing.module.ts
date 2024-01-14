import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Authenticate/login/login.component';
import { SingupComponent } from './Authenticate/singup/singup.component';

import {HomeComponent} from './home/home.component';
import { DetailsComponent } from './details/details.component';
import path from 'path';
import { homedir } from 'os';
import { OTPVarificationComponent } from './Pop-up\'s/otp-varification/otp-varification.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'home', component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'singup', component:SingupComponent},
  {path:':city/:pincode', component: DetailsComponent},
  {path:'verify',component:OTPVarificationComponent},
  {path:'**',component:NotFoundComponent}
  // 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
