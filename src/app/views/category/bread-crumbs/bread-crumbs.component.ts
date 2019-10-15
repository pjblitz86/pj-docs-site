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
}
