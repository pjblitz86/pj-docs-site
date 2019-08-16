import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Alert } from "src/app/models/alert.model";

@Injectable({
  providedIn: "root"
})
export class AlertService {
  public alertSubject = new Subject();

  public callAlert(alert: Alert) {
    this.alertSubject.next(alert);
  }
}
