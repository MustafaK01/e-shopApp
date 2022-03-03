import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cart } from "./cart";
import { Order } from "./order.model";
import { RestService } from "./rest.service";

@Injectable()
export class OrderRepository{

    private order:Order[]=[];
    private restService:RestService
    constructor(restService:RestService){
        this.restService=restService;
    }
    getOrders():Order[]{
        return this.order;
    }
    saveOrder(orders:Order):Observable<Order>{
        return this.restService.saveOrder(orders);
    }
}

