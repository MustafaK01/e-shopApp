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
  public sCategory?:string="";
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
    return this.productsRepository.getProducts();
  }
  getCategories():Category[]{
   return this.categoriesRepository.getCategories();
  }
  changeCategory(newCategory?:string){
    this.sCategory=newCategory;
  }
}
