import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CategoryComponent } from "./category.component";
import { ACategoryService } from "./services/category/acategory.service";
import { CategoryService } from "./services/category/category.service";
import { CommonModule } from "@angular/common";

const routes: Routes = [{ path: ":id", component: CategoryComponent }];

@NgModule({
  declarations: [CategoryComponent],
  providers: [{ provide: ACategoryService, useClass: CategoryService }],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class CategoryModule {}
