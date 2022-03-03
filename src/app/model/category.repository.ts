import { Injectable, OnInit } from "@angular/core";
import { Category } from "./category.model";
import { RestService } from "./rest.service";

@Injectable()
export class CategoryRepository implements OnInit{
    categories: Category[]=[];
    private restService:RestService;
    constructor(restService:RestService){
        this.restService=restService;
        this.restService.getCategories().subscribe(data=>{
            this.categories=data;
        })
        setTimeout(() => {
            console.log(this.categories)
        }, 200);

    }   
    ngOnInit(): void {

    }
    getCategory(param:number){
        return this.categories.find(catId=>catId.id==param);
    }
    getCategories():Category[]{
        return this.categories
    }
    
}

