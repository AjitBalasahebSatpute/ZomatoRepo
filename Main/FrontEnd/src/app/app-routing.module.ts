import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Authenticate/login/login.component';
import { SingupComponent } from './Authenticate/singup/singup.component';

import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path:'', pathMatch:'full', component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'singup', component:SingupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
