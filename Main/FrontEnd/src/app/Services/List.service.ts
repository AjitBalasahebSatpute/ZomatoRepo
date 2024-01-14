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
    restoList:RestaurentModel[]=[  {
        restaurentID: 15,
        imagePath: '',
        ownerEmail: '',
        restaurentName: 'Default',
        rating: 0,
        price: 0,
        distance: 0,
        cityName: '',
        pinCode: 0,
        speciality: [  ]
      }];
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
        const url:string = "http://localhost:1012/restaurent/get/" +this.pincode;
        // console.log(url);
        return this.http.get(url);

    }

    restaurentListService():RestaurentModel []{
        this.selectedCity.subscribe((data:Params)=>{this.pincode=data['pincode'];}) // get selected city from subject
        const url:string = "http://localhost:1012/restaurent/get/" +this.pincode;

        this.http.get<RestaurentModel[]>(url).subscribe(
            (data:RestaurentModel[])=>{data.map(val=>{this.restoList.push(val)})},
            (error:Error)=> {console.log('Error  Occured')},
            ()=>{console.log('request completed')}
        );

        // console.log(this.restoList, "here")
        return this.restoList;
    }
}