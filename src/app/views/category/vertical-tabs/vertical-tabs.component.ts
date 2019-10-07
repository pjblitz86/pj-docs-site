import { Component, Input } from "@angular/core";
import { TabContainer } from "src/app/models/tab-container.model";

@Component({
  selector: "app-vertical-tabs",
  templateUrl: "./vertical-tabs.component.html",
  styleUrls: ["./vertical-tabs.component.scss"]
})
export class VerticalTabsComponent {
  @Input() public tabContainers: TabContainer[] = [];
}
