import { Component } from "@angular/core";
import { TitleService } from "./services/title/title.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(private titleService: TitleService) {}

  public ngOnInit(): void {
    this.titleService.init();
  }
}
