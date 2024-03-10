import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/shared/interfaces/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {


  constructor(private _EcomdataService:EcomdataService , private _CartService:CartService , private _ToastrService:ToastrService){}

  products:Product[] =[]



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

  ngOnInit(): void {

    this._EcomdataService.getAllProducts().subscribe(
      {
        next:(Response)=>{
          this.products = Response.data
        }
      });


  }
}
