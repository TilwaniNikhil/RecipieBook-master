import { NgModule } from "@angular/core";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { PagenotfoundComponent } from "../pagenotfound/pagenotfound.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations:[
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {path:'' , component:ShoppingListComponent },
            {path:'**' ,pathMatch:"full", component:PagenotfoundComponent}
        ]),
        SharedModule,
    ]
})

export class ShoppingListModule{}