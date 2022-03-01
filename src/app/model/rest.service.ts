import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { Category } from "./category.model";
import { Product } from "./product.model";

@Injectable()
export class RestService{
    url="http://localhost:3000"

    private http: HttpClient
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
}
