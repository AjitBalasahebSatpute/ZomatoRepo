import{Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SingUpData } from '../Authenticate/singup/singup.component';

@Injectable(
    {
        providedIn:'root'
    }
)
export class AuthService{


    constructor(private http:HttpClient){}

    singupCheck(Data:SingUpData){
        return this.http.post<any>('http://localhost:1010/user/singup',Data);
    }
}