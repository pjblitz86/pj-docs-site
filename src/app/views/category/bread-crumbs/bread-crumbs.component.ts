import { Component, OnInit } from "@angular/core";
import { BreadCrumb } from "src/app/models/bread-crumb.model";
import { TitleService } from "src/app/services/title/title.service";

@Component({
  selector: "app-bread-crumbs",
  templateUrl: "./bread-crumbs.component.html",
  styleUrls: ["./bread-crumbs.component.scss"]
})
export class BreadCrumbsComponent implements OnInit {
  public breadCrumbs: BreadCrumb[] = [];

  constructor(public titleService: TitleService) {}

  public ngOnInit() {
    this.breadCrumbs = this.titleService.breadCrumbs;
  }
}
