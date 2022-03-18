import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.repository';
import { AlertifyService } from 'src/app/utils/alertify.service';
import { FormChecker } from 'src/app/utils/FormChecker';

@Component({
  selector: 'app-product-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css'],
  providers:[FormChecker,AlertifyService]
})
export class ProductsFormComponent implements OnInit {
  

  productName:string;
  editMode:boolean=false;
  product:Product={};
  alertify:AlertifyService;
  productRepository:ProductRepository;
  private activeRoute:ActivatedRoute;
  private checkForm:FormChecker;
  private router:Router;
  constructor(activeRoute:ActivatedRoute,productRepository:ProductRepository,
    checkForm:FormChecker,alertify:AlertifyService,router:Router) {
    this.productRepository=productRepository;
    this.activeRoute=activeRoute;
    this.checkForm=checkForm;
    this.alertify=alertify;
    this.router=router;
    this.editMode=activeRoute.snapshot.params['mode']=='edit';
    if(this.editMode){
      this.product=this.productRepository.getProduct(activeRoute.snapshot.params['id'])
      console.log(this.productRepository.getProduct(activeRoute.snapshot.params['id']))
    }
   }

  ngOnInit(): void {

  }
  saveProduct(form:NgForm){
    if(this.checkForm.checkIfAllEntered(form.value.name,form.value.price,form.value.imageUrl,form.value.description)){
      if(form.valid){
        this.productRepository.saveProduct(this.product);
        this.router.navigateByUrl('/admin/main/products')
      }
    }else{
      this.alertify.error("Lütfen Bilgileri Giriniz")
    }
    console.log(this.editMode)

  }
  
  


}

