import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import{ FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CityListComponent } from './city-list/city-list.component';
import { ListCardComponent } from './city-list/list-card/list-card.component';
import { ListService } from './Services/List.service';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './Authenticate/login/login.component';
import { SingupComponent } from './Authenticate/singup/singup.component';
import { DetailsComponent } from './details/details.component';
import { DetailsHeaderComponent } from './details/details-header/details-header.component';
import { OTPVarificationComponent } from "./Pop-up's/otp-varification/otp-varification.component";
import { RestaurantListComponent } from './details/restaurant-list/restaurant-list.component';
import { RestaurentCardComponent } from './details/Restaurant-list/restaurent-card/restaurent-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CityListComponent,
    ListCardComponent,
    FooterComponent,
    LoginComponent,
    SingupComponent,
    DetailsComponent,
    DetailsHeaderComponent,
    OTPVarificationComponent,
    RestaurantListComponent,
    RestaurentCardComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    ListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
