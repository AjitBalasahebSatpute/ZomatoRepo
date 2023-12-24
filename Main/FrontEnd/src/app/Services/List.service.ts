import { Injectable } from "@angular/core";
import { cityDetails } from "../Model/city.model";

@Injectable()
export class ListService{

    citylist!:cityDetails[];
    cityList():cityDetails[]{

        this.citylist=[
            new cityDetails(1,'Pandharpur'),
            new cityDetails(1,'Solapur'),
            new cityDetails(1,'Pune'),
            new cityDetails(1,'Mohol'),
            new cityDetails(1,'Mumabai'),
            new cityDetails(1,'Hyderbad'),
            new cityDetails(1,'Nashik'),
            new cityDetails(1,'Panvel'),
            new cityDetails(1,'Pimpri'),
        
            new cityDetails(1,'Pandharpur'),
            new cityDetails(1,'Solapur'),
            new cityDetails(1,'Pune'),
            new cityDetails(1,'Mohol'),
            new cityDetails(1,'Mumabai'),
            new cityDetails(1,'Hyderbad'),
            new cityDetails(1,'Nashik'),
            new cityDetails(1,'Panvel'),
            new cityDetails(1,'Pimpri')
        
        ];

        return this.citylist;
    }
}