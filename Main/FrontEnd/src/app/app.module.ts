import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import{ FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CityListComponent } from './city-list/city-list.component';
import { ListCardComponent } from './city-list/list-card/list-card.component';
import { ListService } from './Services/List.service';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './Authenticate/login/login.component';
import { SingupComponent } from './Authenticate/singup/singup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CityListComponent,
    ListCardComponent,
    FooterComponent,
    LoginComponent,
    SingupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    ListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
