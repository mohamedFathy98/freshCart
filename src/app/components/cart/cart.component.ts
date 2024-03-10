import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
constructor(private _CartService:CartService){}

cartDetails:any = {};

removeCartItem(id:string):void {
  this._CartService.removeItem(id).subscribe({
    next:(Response)=>{

      this.cartDetails = Response.data
    },
    error:(err)=>{
      console.log(err)
    }
  })
}



changeCount(id:string , count:number):void{
if(count > 0){
  this._CartService.updateCartProduct(id , count).subscribe({
    next:(Response)=>{

      this.cartDetails = Response.data
    },
    error:(err)=>{

    }
  })
}
}




ngOnInit(): void {
  this._CartService.getUserCart().subscribe({
    next:(Response)=>{
      this.cartDetails = Response.data
    },
    error:(err)=>{
      console.log(err)
    }
  })
}

}
