import { Product } from "./product.model";

export class CartItem{
    product:Product;
    quantity:number;

    constructor(product:Product,quantity:number){
        this.product=product;
        this.quantity=quantity;
    }

}


