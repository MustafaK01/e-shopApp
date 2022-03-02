import { Product } from "./product.model";

export class CartItem{
    public product:Product;
    public quantity:number;

    constructor(product:Product,quantity:number){
        this.product=product;
        this.quantity=quantity;
    }
}

