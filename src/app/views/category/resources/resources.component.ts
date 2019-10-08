import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-resources",
  templateUrl: "./resources.component.html",
  styleUrls: ["./resources.component.scss"]
})
export class ResourcesComponent implements OnInit {
  @Input() public title = "";
  @Input() public list: string[];

  public ngOnInit() {
    console.log(this.title);
  }
}
