import { Component } from '@angular/core';
import {faHeart, faTruck, faRotate} from '@fortawesome/free-solid-svg-icons'
import { GlobalService } from '../../services/global.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
faHeart = faHeart
faTruck = faTruck
faRotate = faRotate
singleProduct : any
posts : any 

constructor(private global: GlobalService, private activated : ActivatedRoute){ }

ngOnInit(){
  let id = this.activated.snapshot.paramMap.get("id")

  const mockApiResponse = {
    "status": "Success",
    "message": "Data fetched",
    "data": [
        {
            "id": 923,
            "name": "S.9 Console 170x40",
            "price": "5,000.00",
            "vendor": {
                "name": "Ahmed",
                "id": 86
            },
            "gallery": [
                {
                    "name": "http://techs-experts.net/public/gallary/a.jpg"
                },
                {
                    "name": "http://techs-experts.net/public/gallary/a.jpg"
                }
            ],
            "is_liked": 0,
            "detail": {
                "name": "S.9 Console 170x40",
                "desc": "to embrace your belongings and improve the scenery completion in your home."
            },
            "height": "75",
            "width": "170",
            "weight": null,
            "depth": "40",
            "product_editor_image": "http://techs-experts.net/public/productEditorImages/1719675298.webp",
            "width_on_editor": "",
            "height_on_editor": "",
            "has_attributes": 1,
            "attributes": [
                {
                    "id": 3,
                    "name": "Color",
                    "has_variations": 1,
                    "variations": [
                        {
                            "id": 16,
                            "name": "Blue",
                            "hex_color": "0xff0000ff"
                        },
                        {
                            "id": 14,
                            "name": "Gold",
                            "hex_color": "0xfff9f586"
                        }
                    ]
                }
            ],
            "in_cart": 0,
            "cartQuantity": 0,
            "price_after": "4,500.00",
            "percentage": "10",
            "image": "http://techs-experts.net/public/gallary//a.jpg",
            "order_on_collage": 22,
            "similar_products": [
                {
                    "id": 924,
                    "name": "S.9 Console 170x40",
                    "price": "5,000.00",
                    "vendor": {
                        "id": 86,
                        "name": "Ahmed"
                    },
                    "is_liked": 0,
                    "height": "75",
                    "width": "170",
                    "weight": null,
                    "depth": "40",
                    "product_editor_image": "http://techs-experts.net/public/productEditorImages/1719675406.webp",
                    "width_on_editor": "",
                    "height_on_editor": "",
                    "in_cart": 0,
                    "cartQuantity": 0,
                    "price_after": "4,500.00",
                    "percentage": "10",
                    "image": "http://techs-experts.net/public/gallary/a.jpg"
                }
            ]
        }
    ]
}
// Simulate API call response
// this.singleProduct = mockApiResponse.data;
// console.log(this.singleProduct[0].similar_products);




  // console.log(id)
  this.global.getSingleProduct(id).subscribe(res=>{
    this.singleProduct = res.data 
    
    console.log(res.data)
    
    if (this.singleProduct && this.singleProduct.gallery) {
      console.log(this.singleProduct.gallery);  // Access the gallery here
    } else {
      console.error('No gallery found for this product.');
    }
  }, error => {
    console.error('Error fetching product:', error);
  })

  
  this.global.getSingleProduct(id).subscribe(res=>{
    this.posts = res.data[0].similar_products //id 923 is the only one which has similar posts
    console.log(this.posts)
  })

  // this.global.getPosts().subscribe(res=>{

  // })
}
}
