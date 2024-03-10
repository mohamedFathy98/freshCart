import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent  implements OnInit {
constructor(private _FormBuilder:FormBuilder , private _ActivatedRoute:ActivatedRoute , private _CartService:CartService){}
cartId:any = ''
handleForm():void {


  this._CartService.checkOut(this.cartId , this.checkOutForm.value ).subscribe({

    next:(Response)=>{
      console.log(Response);
      window.open(Response.session.url , '_self')


    }
  })

}

checkOutForm:FormGroup = new FormGroup({

  details: new FormControl('', [Validators.required]),
  phone: new FormControl('',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
  city: new FormControl('',[Validators.required]),

    });

ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next:(params)=>{

    this.cartId = params.get('id')

    },
  })
}




}
