import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor( private _AuthService:AuthService , private _Router:Router){}

  msgError:string ='';

  isLoading:boolean = false ;

    LoginForm:FormGroup = new FormGroup({


  email: new FormControl('',[Validators.required,Validators.email]),
  password: new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]),

    });


    handleForm():void{

     if(this.LoginForm.valid){
      this.isLoading = true;
      this._AuthService.setLogin(this.LoginForm.value).subscribe({
        next:(response)=>{
          if(response.message == 'success'){
            this.isLoading = false;
            localStorage.setItem('eToken',response.token);
            this._AuthService.saveUserData();

            this._Router.navigate(['/home' ])

          }
        },
        error:(err:HttpErrorResponse)=>{
          this.isLoading = false;

          this.msgError = err.error.message


        },
      })

     }
     else{
      this.LoginForm.markAllAsTouched()
     }

    }

  }

