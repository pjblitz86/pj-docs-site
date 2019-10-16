import { Component, OnInit } from "@angular/core";
import { BreadCrumb } from "src/app/models/bread-crumb.model";
import { BreadCrumbsService } from "src/app/services/bread-crumbs/bread-crumbs.service";

@Component({
  selector: "app-bread-crumbs",
  templateUrl: "./bread-crumbs.component.html",
  styleUrls: ["./bread-crumbs.component.scss"]
})
export class BreadCrumbsComponent implements OnInit {
  public breadCrumbs: BreadCrumb[] = [];

  constructor(public breadCrumbsService: BreadCrumbsService) {}

  public ngOnInit(): void {
    this.breadCrumbs = this.breadCrumbsService.breadCrumbs;
  }

  public getRouteUrl(index: number) {
    let url = "/category/";

    if (index >= 0) {
      url += this.breadCrumbs[0].urlPiece;
    }

    if (index >= 1) {
      url += `/topic/${this.breadCrumbs[1].urlPiece}`;
    }

    if (index >= 2) {
      url += `/detail/${this.breadCrumbs[2].urlPiece}`;
    }

    return url;
  }
}
