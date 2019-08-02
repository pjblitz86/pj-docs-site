import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CategoryComponent } from "./category.component";
import { CommonModule } from "@angular/common";
import { ACategoryService } from 'src/app/services/category/acategory.service';
import { ResourcesComponent } from './resources/resources.component';
import { CategoryService } from 'src/app/services/category/category.service';

const routes: Routes = [{ path: ":id", component: CategoryComponent }];

@NgModule({
  declarations: [CategoryComponent, ResourcesComponent],
  providers: [{ provide: ACategoryService, useClass: CategoryService }],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class CategoryModule {}
