import { Component, Input, OnInit } from "@angular/core";
import { Alert } from "src/app/models/enums/alert.enum";
import { AlertService } from "src/app/services/alert/alert.service";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.scss"]
})
export class AlertComponent implements OnInit {
  @Input() public type: Alert = Alert.Info;
  @Input() public title: string = "";
  @Input() public content: string = "";

  public alertTypes = Alert;
  public isShown: boolean = true;
  public isNeeded: boolean = false;

  constructor(public alertService?: AlertService) {}

  public ngOnInit(): void {
    this.alertService.alertSubject.asObservable().subscribe(data => {
      // check to see if we need to call alert
    });
  }

  public close(): void {
    this.isShown = false;
  }
}
