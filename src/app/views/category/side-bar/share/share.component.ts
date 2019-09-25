import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-share",
  templateUrl: "./share.component.html",
  styleUrls: ["./share.component.scss"]
})
export class ShareComponent {
  constructor(public titleService: Title) {}

  public get twitterMessage(): string {
    const base = "https://twitter.com/intent/tweet?hashtags=javascript&text=";

    const message = encodeURIComponent(
      `Check out ${this.titleService.getTitle()}! Where documentation is more than just text!`
    );

    return `${base}${message}`;
  }
}
