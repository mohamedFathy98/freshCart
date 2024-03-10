import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from 'src/app/shared/interfaces/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';

@Component({
  selector: 'app-deatails',
  templateUrl: './deatails.component.html',
  styleUrls: ['./deatails.component.css']
})
export class DeatailsComponent implements OnInit {
  constructor(private _ActivatedRoute:ActivatedRoute , private _EcomdataService:EcomdataService ,private _CartService:CartService){}

  addCart(id:string):void{
    this._CartService.addToCard(id).subscribe({
      next:(Response)=>{

      },
      error:(err)=>{

      }
    })
    }

  productSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    autoplay:true,
   items:1,
    nav: false
  }

productDetails:Product = {} as Product;

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
       let idProduct:any = params.get('id');
        this._EcomdataService.getProductsDetails(idProduct).subscribe({
          next:(Response)=>{
this.productDetails =Response.data;
          }
        })

      }
    })
  }

}
