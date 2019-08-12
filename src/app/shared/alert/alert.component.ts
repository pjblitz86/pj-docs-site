import { Component, Input } from "@angular/core";
import { Alert } from 'src/app/models/enums/alert.enum';

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.scss"]
})
export class AlertComponent {
  @Input() public type: Alert = Alert.Info;
  @Input() public title: string = "";
  @Input() public content: string = "";

  public alertTypes = Alert;

}
