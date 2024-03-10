import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from 'src/app/shared/interfaces/product';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';
import { SearchPipe } from 'src/app/search.pipe';
import { CartService } from 'src/app/shared/services/cart.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
constructor(private _EcomdataService:EcomdataService , private _CartService:CartService , private _ToastrService:ToastrService){}

products:Product[] =[]

Categories:any[]=[]

searchTerm:string = ''

addCart(id:string):void{
this._CartService.addToCard(id).subscribe({
  next:(Response)=>{
    this._ToastrService.success(Response.message)

  },
  error:(err)=>{
    console.log(err)
  }
})
}

CategoriesSliderOption: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  autoplay:true,
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 6
    }
  },
  nav: true
}
Mainslider: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  autoplay:true,
 items:1,
  nav: true
}


ngOnInit(): void {

  this._EcomdataService.getAllProducts().subscribe(
    {
      next:(Response)=>{
        this.products = Response.data
      }
    });

  this._EcomdataService.getCategories().subscribe(

   {
    next:(Response)=>{
this.Categories = Response.data;
    }
   }


  )
}

}
