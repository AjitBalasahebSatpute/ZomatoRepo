import { Injectable } from "@angular/core";
import {Observable} from 'rxjs';
import { cityDetails } from "../Model/city.model";
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ListService{


    constructor(private http:HttpClient){

    }
    // list!:cityDetails[];

    cityList():Observable <any>
    {
        return this.http.get("http://localhost:1011/city/get");
    }
}