import { NgModule } from "@angular/core";
import{HttpClientModule} from "@angular/common/http"
import { RestService } from "./rest.service";
@NgModule({
     imports:[HttpClientModule],
     providers:[RestService]
})
export class ModelModule{

}
