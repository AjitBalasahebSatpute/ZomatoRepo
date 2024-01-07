import { Component,OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router'
import { ListService } from '../Services/List.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{

  constructor(private route:ActivatedRoute,private listService:ListService ){

    route.params.subscribe(
      data=>{
        listService.selectedCity.next(data);
        // console.log(typeof(+data['pincode']))
      }
    )
  }


  ngOnInit(){
    window.scrollTo(0,0);
  }
}
