import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SideNavComponent } from "./components/side-nav/side-nav.component";
import { AppRoutingModule } from "./app-routing.module";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { SharedModule } from "./shared/shared.module";
import { AlertService } from "./services/alert/alert.service";

@NgModule({
  declarations: [AppComponent, FooterComponent, SideNavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule {}
