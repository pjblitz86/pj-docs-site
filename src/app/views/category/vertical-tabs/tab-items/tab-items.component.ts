import { Component, Input, OnInit } from "@angular/core";
import { Tab } from "src/app/models/tab.model";

@Component({
  selector: "app-tab-items",
  templateUrl: "./tab-items.component.html",
  styleUrls: ["./tab-items.component.scss"]
})
export class TabItemsComponent implements OnInit {
  @Input() public tabItems: Tab[] = [];

  public ngOnInit() {
    this.tabItems[0].isActive = true;
  }
}
