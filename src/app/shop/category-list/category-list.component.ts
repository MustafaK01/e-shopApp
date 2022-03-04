import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { CategoryRepository } from 'src/app/model/category.repository';

@Component({
  selector: 'shop-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  private router:Router;

  public sCategory:Category = {};
  @Output() selectedCategory=new EventEmitter<Category>();
  private categoriesRepository:CategoryRepository;

  constructor(categoriesRepository:CategoryRepository,router:Router) {
    this.categoriesRepository=categoriesRepository;
    this.router=router;

   }

  ngOnInit(): void {
  }
  getCategories():Category[]{
    return this.categoriesRepository.getCategories();
  }
  seeAllCategories(){
    ///*******///
    location.reload();
  }
  changeCategory(newCategory?:Category){
    this.sCategory.name=newCategory?.name;
    this.selectedCategory.emit(newCategory);
  }

}

