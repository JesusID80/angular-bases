import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { ListComponent } from "./list/list.component";
import { HeroComponent } from "./hero/hero.component";

@NgModule({
    declarations:[
        ListComponent,
        HeroComponent
    ],
    exports:[
        ListComponent,
        HeroComponent
    ]
})
export class HeroesModule {

}