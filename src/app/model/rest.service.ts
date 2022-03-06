import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, tap } from "rxjs";
import { Category } from "./category.model";
import { Order } from "./order.model";
import { Product } from "./product.model";

@Injectable()
export class RestService{
    url="http://localhost:3500"

    private http: HttpClient
    token:string;
    constructor(http:HttpClient){
        this.http=http;
    }
    getProcuts():Observable<Product[]>{
        return this.http.get<Product[]>(this.url+"/products").pipe(
            tap(data=>{console.log(data)})
        )
    }
    getCategories():Observable<Category[]>{
        return this.http.get<Category[]>(this.url+"/categories").pipe(
            tap(data=>{console.log(data)})
        )
    }
    saveOrder(order: Order):Observable<Order>{
        return this.http.post<Order>(this.url+"/orders",order)
    }
    authentication(username:string,password:string):Observable<boolean>{
        return this.http.post<any>(this.url+"/login",{
            username:username,
            password:password
        }).pipe(map(response => {
            this.token = response.success ? response.token:null;
            console.log(this.token)
            return response.success;
        }))
    }
}

