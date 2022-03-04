import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cart';
import { Category } from 'src/app/model/category.model';
import { CategoryRepository } from 'src/app/model/category.repository';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.repository';

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers:[CategoryRepository,ProductRepository]
})

export class ShopComponent implements OnInit {
  public productsPerPage = 2;
  public selectePage=1;
  public pageNumbers=[1,2,3,4]
  public sCategory:Category = {};

  public selectedProducts:Product[]=[];
  private productsRepository:ProductRepository;
  constructor(productsRepository:ProductRepository) {
    this.productsRepository=productsRepository;
    
   }
  ngOnInit(): void {
 
  }
  getProducts():Product[]{
    let k = (this.selectePage-1)*this.productsPerPage
    this.selectedProducts =  this.productsRepository.getProducts(this.sCategory.name)
    return this.selectedProducts.slice(k,k+this.productsPerPage);
  }
  changePage(x:number){
    this.selectePage=x
  }
  getPageNumbers():number[]{
    return Array(Math.ceil(this.productsRepository.getProducts(this.sCategory.name).length/this.productsPerPage)).fill(0)
    .map((a,i)=>i+1);
  }
  changePageSize(size:number){
    this.productsPerPage=size;
    this.changePage(1);
  }
  getCategory(category:Category){
    this.sCategory=category;
  }

}

