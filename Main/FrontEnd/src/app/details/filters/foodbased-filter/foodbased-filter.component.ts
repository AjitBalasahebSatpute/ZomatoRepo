import { Component } from '@angular/core';
import { FoodModel } from '../../../Model/food.model';
import { TopBrandModel } from '../../../Model/TopBrands.model';



@Component({
  selector: 'app-foodbased-filter',
  templateUrl: './foodbased-filter.component.html',
  styleUrl: './foodbased-filter.component.css'
})
export class FoodbasedFilterComponent {


  // here integration of service is required 
  SelectiveFood:FoodModel[]=
  [
    {
      name:"Pizza",
    foodId:1,
    imagePath:'https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png'
    },
    {
      name:"Thali",
    foodId:1,
    imagePath:'https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png'
    },
    {
    name:"Burger",
    foodId:1,
    imagePath:'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png'
    },

    {
      name:"Biryani",
    foodId:1,
    imagePath:'https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png'
    },

    {
      name:"Cake",
    foodId:1,
    imagePath:'https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png'
    },
    {
      name:"checken",
    foodId:1,
    imagePath:'https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png'
    }

  ]

  topBrand:TopBrandModel[]=
  [
    {
      name:"McDonald's",
      imagePath:'https://b.zmtcdn.com/data/brand_creatives/logos/775f928725d1a9dd80422632de22c224_1611377090.png?output-format=webp',
      brandID:1,
      distance:14
    },
    {
      name:"Burger King",
      imagePath:'https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188299.png?output-format=webp',
      brandID:1,
      distance:10
    },
    {
      name:"Domino's Pizza",
      imagePath:'https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252811.png?output-format=webp',
      brandID:1,
      distance:15
    },
    {
      name:"Pizza Hut",
      imagePath:'https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp',
      brandID:1,
      distance:12
    },
    {
      name:"KFC",
      imagePath:'https://b.zmtcdn.com/data/brand_creatives/logos/9da52e2b69f19bb603227a750e788d33_1613215152.png?output-format=webp',
      brandID:1,
      distance:25
    }

  ]
}
