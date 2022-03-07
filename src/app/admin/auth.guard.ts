import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../model/auth.service";

@Injectable()
export class AuthGuard implements CanActivate{
    private router:Router 
    private authService:AuthService;
    constructor(authService:AuthService,router:Router){
        this.router=router;
        this.authService=authService;
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(!this.authService.authenticated){
            this.router.navigateByUrl('admin/auth')
            return false;
        }
        return true;
    }
}
