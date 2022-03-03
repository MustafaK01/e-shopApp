import { Injectable } from "@angular/core";

@Injectable()
export class OrderFormChecker{
    mailDomains:string[]=["@gmail.com","@outlook.com","@yahoo.com"];
    checkIfAllEntered(...param:any[]){
        for(let k = 0;k<param.length;k++){
            if(param[k]==null||param[k]==undefined||param[k]==""||param[k]==0){
                return false;
            }
        }
        return true;
    }
    checkIfTheEmailIsEntered(param:any):boolean{
        for(let i = 0;i<this.mailDomains.length;i++){
            if(param.substring(param.indexOf("@"),param.length)==this.mailDomains[i]){
                return true;
            }
        }
        return false;
    }
}
