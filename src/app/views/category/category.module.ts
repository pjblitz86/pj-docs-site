import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CategoryComponent } from "./category.component";

const routes: Routes = [{ path: "", component: CategoryComponent }];

@NgModule({
  declarations: [CategoryComponent],
  imports: [RouterModule.forChild(routes)]
})
export class CategoryModule {}
