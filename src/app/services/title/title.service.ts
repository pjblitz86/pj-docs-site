import { Injectable } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { filter } from "rxjs/operators";
import { DISPLAY_META_DATA } from "../../models/data/display-meta-data.data";

@Injectable({
  providedIn: "root"
})
export class TitleService {
  

  constructor(public router: Router, public titleService: Title) {}

  public init(): void {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((navigationEnd: NavigationEnd) => {
        this.updateTitle(navigationEnd);
      });
  }

  private updateTitle(navigationEnd: NavigationEnd): void {
    const urlPieces: string[] = navigationEnd.url
      .split("/")
      .filter(piece => piece.length > 0);

    urlPieces[urlPieces.length - 1] = this.removeHash(urlPieces);

    switch (urlPieces.length) {
      case 2:
        this.setSubcategoryTitle(urlPieces);

        break;

      default:
        this.titleService.setTitle("Video Dev Docs | VDD");
    }
  }

  private setSubcategoryTitle(urlPieces: string[]): void {
    const actualCategory = urlPieces[1];
    let title = `${actualCategory.toUpperCase()} | VDD`;

    if (actualCategory === "javascript") {
      title = `${DISPLAY_META_DATA[actualCategory].label} | VDD`;
    }

    this.titleService.setTitle(title);
  }

  private removeHash(urlPieces: string[]): string {
    return (urlPieces[urlPieces.length - 1] = urlPieces.length
      ? urlPieces[urlPieces.length - 1].split("#")[0]
      : "");
  }
}
