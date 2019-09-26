import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./views/home/home.module").then(module => module.HomeModule)
  },
  {
    path: "category",
    loadChildren: () =>
      import("./views/category/category.module").then(
        module => module.CategoryModule
      )
  },
  {
    path: "about",
    loadChildren: () =>
      import("./views/about/about.module").then(module => module.AboutModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
      onSameUrlNavigation: "reload",
      anchorScrolling: "enabled"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
