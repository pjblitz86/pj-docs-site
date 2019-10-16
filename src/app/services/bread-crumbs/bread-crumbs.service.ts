import { Injectable } from "@angular/core";
import { BreadCrumb } from "src/app/models/bread-crumb.model";
import { filter } from "rxjs/operators";
import { Router, NavigationEnd } from "@angular/router";

@Injectable()
export class BreadCrumbsService {
  public breadCrumbs: BreadCrumb[] = [];

  constructor(public router: Router) {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((navigationEnd: NavigationEnd) => {
        this.updateBreadCrumbs(navigationEnd.url);
      });
  }

  private updateBreadCrumbs(url: string): void {
    const validCrumbs = url.split("/").filter(piece => piece.length > 0);

    validCrumbs.shift();
    validCrumbs[validCrumbs.length - 1] = this.removeHash(validCrumbs);

    const cumbPieces = validCrumbs.map(p => new BreadCrumb({ urlPiece: p }));

    this.breadCrumbs = cumbPieces;
  }

  private removeHash(urlPieces: string[]): string {
    return (urlPieces[urlPieces.length - 1] = urlPieces.length
      ? urlPieces[urlPieces.length - 1].split("#")[0]
      : "");
  }
}
