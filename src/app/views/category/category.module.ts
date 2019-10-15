import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CategoryComponent } from "./category.component";
import { CommonModule } from "@angular/common";
import { ACategoryService } from "src/app/services/category/acategory.service";
import { ResourcesComponent } from "./resources/resources.component";
import { CategoryService } from "src/app/services/category/category.service";
import { TopicComponent } from "./topic/topic.component";
import { SharedModule } from "src/app/shared/shared.module";
import { SideBarComponent } from "./side-bar/side-bar.component";
import { ShareComponent } from "./side-bar/share/share.component";
import { SupportComponent } from "./side-bar/support/support.component";
import { CourseComponent } from "./side-bar/course/course.component";
import { VerticalTabsComponent } from "./vertical-tabs/vertical-tabs.component";
import { TabItemsComponent } from "./vertical-tabs/tab-items/tab-items.component";
import { DynamicContentComponent } from "./dynamic-content/dynamic-content.component";
import { BreadCrumbsComponent } from "./bread-crumbs/bread-crumbs.component";
import { BreadCrumbsService } from "src/app/services/bread-crumbs/bread-crumbs.service";

const routes: Routes = [{ path: ":id", component: CategoryComponent }];

@NgModule({
  declarations: [
    CategoryComponent,
    ResourcesComponent,
    TopicComponent,
    SideBarComponent,
    ShareComponent,
    SupportComponent,
    CourseComponent,
    VerticalTabsComponent,
    TabItemsComponent,
    DynamicContentComponent,
    BreadCrumbsComponent
  ],
  providers: [
    { provide: ACategoryService, useClass: CategoryService },
    BreadCrumbsService
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)]
})
export class CategoryModule {}
