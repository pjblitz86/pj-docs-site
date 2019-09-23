import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CategoryComponent } from "./category.component";
import { CommonModule } from "@angular/common";
import { ACategoryService } from "src/app/services/category/acategory.service";
import { ResourcesComponent } from "./resources/resources.component";
import { CategoryService } from "src/app/services/category/category.service";
import { TopicComponent } from "./topic/topic.component";
import { SharedModule } from "src/app/shared/shared.module";
import { SideBarComponent } from './side-bar/side-bar.component';

const routes: Routes = [{ path: ":id", component: CategoryComponent }];

@NgModule({
  declarations: [CategoryComponent, ResourcesComponent, TopicComponent, SideBarComponent],
  providers: [{ provide: ACategoryService, useClass: CategoryService }],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)]
})
export class CategoryModule {}
