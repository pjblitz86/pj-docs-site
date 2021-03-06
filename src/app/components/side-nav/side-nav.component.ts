import { Component } from "@angular/core";

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"]
})
export class SideNavComponent {
  public isClosed: boolean = true;

  public openMenu(): void {
    this.isClosed = false;
  }

  public closeMenu(): void {
    this.isClosed = true;
  }
}
