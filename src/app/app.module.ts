import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SideNavComponent } from './components/side-nav/side-nav.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, SideNavComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
