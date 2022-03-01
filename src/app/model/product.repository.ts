import { Injectable, OnInit } from "@angular/core";
import { Product } from "./product.model";
import { RestService } from "./rest.service";

@Injectable()
export class ProductRepository implements OnInit{
    products: Product[]=[];
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
        this.products.find(productId=>productId.id===id);
    }
    getProducts():Product[]{
        return this.products;
    }
}
