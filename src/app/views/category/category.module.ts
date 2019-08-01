import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CategoryComponent } from "./category.component";
import { ACategoryService } from "./services/category/acategory.service";
import { CategoryService } from "./services/category/category.service";
import { CommonModule } from "@angular/common";
import { ResourcesComponent } from './components/resources/resources.component';

const routes: Routes = [{ path: ":id", component: CategoryComponent }];

@NgModule({
  declarations: [CategoryComponent, ResourcesComponent],
  providers: [{ provide: ACategoryService, useClass: CategoryService }],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class CategoryModule {}
