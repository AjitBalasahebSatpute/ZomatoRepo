import { Component,OnInit } from '@angular/core';
import { RestaurentModel } from '../../Model/Restaurent-card';
import { ListService } from '../../Services/List.service';
import {Observable} from 'rxjs'
import { error } from 'node:console';



@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.css'
})
export class RestaurantListComponent implements OnInit{
  restaurentList!:[RestaurentModel];
  constructor(private listService:ListService){}
  ngOnInit(): void {
  this.listService.restaurentList().subscribe(
    (data)=>{
      this.restaurentList=data;
    },
    (error:Error)=>{
      console.log(error.message)
    }
  )
  }



  

  // restaurentList:[RestaurentModel]=[
  //   {
  //     "restaurentID":1,
  //     "imagePath": "https://b.zmtcdn.com/data/pictures/chains/4/10624/53a96bd95a58594f3d783df84b281c7c_o2_featured_v2.jpg",
  //   "rating": 3.7,
  //   "price": 200,
  // "distance": 31,
  //   "ownerEmail": "check15@gmail.com",
  //   "cityName": "Pandharpur",
  //   "pinCode": 413301,
  //   "restaurentName": "KFC",
  //   "speciality": ['pizza,','fast food special']
  //   }
  // ]
  /* 
  {
    "imagePath": "https://b.zmtcdn.com/data/pictures/chains/4/10624/53a96bd95a58594f3d783df84b281c7c_o2_featured_v2.jpg",
    "rating": 3.7,
    "price": 200,
  "distance": 31,
    "ownerEmail": "check15@gmail.com",
    "cityName": "Pandharpur",
    "pinCode": 413301,
    "restaurentName": "KFC",
    "speciality": [
        "Pizza",
        ", Pasta",
         "Momos",
          "Fast F"
    ]
}
  */

}
