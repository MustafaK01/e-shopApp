import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RestService } from "./rest.service";

@Injectable()
export class AuthService{
    private restService:RestService;
    constructor(restService:RestService){
        this.restService=restService;
    }
    authenticate(username:string,password:string):Observable<boolean>{
        return this.restService.authentication(username,password)
    }
    get authenticated():boolean{
        return this.restService.token!=null;
    }
    clear(){
        this.restService.token=null as any;
    }
}

