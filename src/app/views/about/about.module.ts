import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { AboutComponent } from "./about.component";

const routes: Routes = [{ path: "", component: AboutComponent }];

@NgModule({
  declarations: [AboutComponent],
  imports: [SharedModule, RouterModule.forChild(routes)]
})
export class AboutModule {}
