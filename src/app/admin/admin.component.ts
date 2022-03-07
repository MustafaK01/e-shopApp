import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../model/auth.service";


@Component({
    selector:'admin',
    templateUrl:'./admin.component.html'
})
export class AdminComponent{
    private authService:AuthService;
    private router:Router;
    constructor(authService:AuthService,
        router:Router){
        this.authService=authService;
        this.router=router;
    }
    logout(){
        this.authService.clear();
        this.router.navigateByUrl('/shop')
    }
}

