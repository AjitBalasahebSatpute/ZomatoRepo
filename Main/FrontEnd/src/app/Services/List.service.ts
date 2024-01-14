import { Injectable, OnChanges, SimpleChanges } from "@angular/core";
import {Observable,Subject} from 'rxjs';
import { cityDetails } from "../Model/city.model";
import {HttpClient} from '@angular/common/http';
import { RestaurentModel } from "../Model/Restaurent-card";
import { Params } from "@angular/router";

@Injectable(
    {providedIn:'root'}
)
export class ListService {

    selectedCity= new Subject<Params>();
    RestoListSubject= new Subject<RestaurentModel[]>()
     restoList:RestaurentModel[]=[];
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


    //replaced by list return restaurentListService
    // restaurentList():Observable<any>{

    //     this.selectedCity.subscribe(
    //         (data:Params)=>{
    //             this.pincode=data['pincode'];
    //             console.log
    //             console.log(this.pincode)
    //         },
    //         (error)=>{console.log(error.message)}
    //     ) 
    //     const url:string = "http://localhost:1012/restaurent/get/" +this.pincode;
    //     return this.http.get(url);

    // }

    restaurentListService(pincode:number):void{
       
         // get selected city from subject
        const url:string = "http://localhost:1012/restaurent/get/"+ pincode;

        this.http.get<RestaurentModel[]>(url).subscribe(
            // (data:RestaurentModel[])=>{data.map(val=>{restoList.push(val)})},
            (data:RestaurentModel[])=>{ this.RestoListSubject.next(data)},
            (error:Error)=> {console.log('Error  Occured')},
            ()=>{console.log('request completed')}
        );
        // console.log(restoList, "in service") 
            
        
        return ;
    }
}