import { Component } from '@angular/core';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  constructor(private _EcomdataService:EcomdataService){}


  Categories:any[]=[]

  ngOnInit(): void {



    this._EcomdataService.getCategories().subscribe(

     {
      next:(Response)=>{
  this.Categories = Response.data;
      }
     }


    )
  }



}
