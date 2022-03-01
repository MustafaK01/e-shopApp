import { Injectable, OnInit } from "@angular/core";
import { Category } from "./category.model";
import { Product } from "./product.model";
import { RestService } from "./rest.service";

@Injectable()
export class ProductRepository implements OnInit{
    public products: Product[]=[];
    public productsPerPage = 3;
    public selectePage=1;
    private restService:RestService;
    constructor(restService:RestService){
        this.restService=restService;
        this.restService.getProcuts().subscribe(data=>{
            this.products=data;
        })
        setTimeout(() => {
            console.log(this.products)

        }, 200);
    }   
    ngOnInit(): void {       
        
    }
    getProduct(id:number):any{
        return this.products.find(productId=>productId.id===id);
    }
    getProducts(category:string=""):Product[]{
        if(category!=""){
            return this.products.filter(data=>data.category==category);
        }
        return this.products;
    }
}

