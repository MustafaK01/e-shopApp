import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { CategoryRepository } from 'src/app/model/category.repository';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.repository';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers:[CategoryRepository,ProductRepository]
})

export class ShopComponent implements OnInit {
  public productsPerPage = 3;
  public selectePage=1;
  public pageNumbers=[1,2,3,4]
  public sCategory?:string;
  private products:Product[]=[];
  private categories:Category[]=[];
  private categoriesRepository:CategoryRepository;
  private productsRepository:ProductRepository;
  constructor(categoriesRepository:CategoryRepository,productsRepository:ProductRepository) {
    this.categoriesRepository=categoriesRepository;
    this.productsRepository=productsRepository;
   }

  ngOnInit(): void {
  }

  getProducts():Product[]{
    let k = (this.selectePage-1)*this.productsPerPage

    return this.productsRepository.getProducts(this.sCategory)
    .slice(k,k+this.productsPerPage);
  }
  getCategories():Category[]{
   return this.categoriesRepository.getCategories();
  }
  changeCategory(newCategory?:string){
    this.sCategory=newCategory;
  }
  changePage(x:number){
    this.selectePage=x
  }
  getPageNumbers():number[]{
    return Array(Math.ceil(this.productsRepository.getProducts(this.sCategory).length/this.productsPerPage)).fill(0)
    .map((a,i)=>i+1);
  }
}
