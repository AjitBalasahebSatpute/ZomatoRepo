import { Injectable } from "@angular/core";
import {Observable,Subject} from 'rxjs';
import { cityDetails } from "../Model/city.model";
import {HttpClient} from '@angular/common/http';
import { RestaurentModel } from "../Model/Restaurent-card";
import { Params } from "@angular/router";

@Injectable()
export class ListService{

    selectedCity= new Subject<Params>();
    pincode!:number;

    constructor(private http:HttpClient){
        this.selectedCity.subscribe(
            (data:Params)=>{
                this.pincode=data['pincode'];
                console.log
                console.log(this.pincode)
            },
            (error)=>{console.log(error.message)}
        ) 
    }
    // list!:cityDetails[];

    cityList():Observable <any>
    {
        return this.http.get("http://localhost:1011/city/get");
    }

    restaurentList():Observable<any>{

        this.selectedCity.subscribe(
            (data:Params)=>{
                this.pincode=data['pincode'];
                console.log
                console.log(this.pincode)
            },
            (error)=>{console.log(error.message)}
        ) 
        const url:string = "http://localhost:1012/restaurent/get/" +413301;
        // console.log(url);
        return this.http.get(url);

    }
}