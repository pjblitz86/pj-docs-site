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
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
