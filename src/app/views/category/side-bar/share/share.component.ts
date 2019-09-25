import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";

@Component({
  selector: "app-share",
  templateUrl: "./share.component.html",
  styleUrls: ["./share.component.scss"]
})
export class ShareComponent {
  constructor(public titleService: Title, public router: Router) {}

  public get twitterMessage(): string {
    const base = "https://twitter.com/intent/tweet?hashtags=javascript&text=";

    const message = encodeURIComponent(
      `Check out ${this.titleService.getTitle()}! Where documentation is more than just text!`
    );

    return `${base}${message}`;
  }

  public get linkedinMessage(): string {
    const base = `https://www.linkedin.com/shareArticle?mini=true`;

    return `${base}${this.getUrl()}`;
  }

  private getUrl(): string {
    return `&url=https://www.VideoDevDocs.com${this.router.url}`;
  }
}
