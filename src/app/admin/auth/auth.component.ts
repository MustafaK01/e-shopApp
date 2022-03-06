import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';
import { AlertifyService } from 'src/app/utils/alertify.service';
import { FormChecker } from 'src/app/utils/FormChecker';

@Component({
  selector: 'admin-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers:[FormChecker,AlertifyService]
})
export class AuthComponent implements OnInit {


  public username:string;
  public password:string;
  public errorMessage:string;
  private loginFormChecker:FormChecker;
  private alertify:AlertifyService;
  private router:Router;
  private authService:AuthService;
  constructor(router:Router,loginFormChecker:FormChecker,alertify:AlertifyService,
    authService:AuthService) {
    this.router=router
    this.loginFormChecker=loginFormChecker
    this.alertify=alertify;
    this.authService=authService;
   }

  ngOnInit(): void {
  }
  login(form:NgForm){
    if(this.loginFormChecker.checkIfAllEntered(form.value.username,form.value.password)){
          if(form.valid){
            this.authService.authenticate(this.username,this.password).subscribe(response=>{
              if(response){
                this.router.navigateByUrl('admin/main')
              }
              else{
                this.errorMessage="Hatalı Kullanıcı Adı Ya Da Şifre";
                this.alertify.error("Hatalı Kullanıcı Adı Ya Da Şifre")
              }

            })
            }else{
              this.errorMessage="Hatalı Kullanıcı Adı Ya Da Şifre";
              this.alertify.error("Hatalı Kullanıcı Adı Ya Da Şifre")
          }
      }else{
        this.alertify.error("Lütfen Bilgilerinizi Giriniz")
      }
  }

}

