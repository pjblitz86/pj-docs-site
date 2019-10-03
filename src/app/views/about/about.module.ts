import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { AboutComponent } from "./about.component";
import { QuoteComponent } from "./quote/quote.component";
import { TeamComponent } from "./team/team.component";
import { CommonModule } from "@angular/common";

const routes: Routes = [{ path: "", component: AboutComponent }];

@NgModule({
  declarations: [AboutComponent, QuoteComponent, TeamComponent],
  imports: [SharedModule, CommonModule, RouterModule.forChild(routes)]
})
export class AboutModule {}
