export interface RestaurentModel{
    restaurentID:number;
    imagePath:string;
    rating:number;
    price:number;
    distance:number;
    ownerEmail:string;
    cityName:string;
    pinCode:number;
    restaurentName:string;
    speciality:string[];

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