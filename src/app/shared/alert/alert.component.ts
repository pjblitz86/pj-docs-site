import { Component, OnInit } from "@angular/core";
import { AlertService } from "src/app/services/alert/alert.service";
import { ALocalStorageService } from "src/app/services/local-storage/alocal-storage.service";
import { LocalStorageKey } from "src/app/models/enums/local.storage-key.enum";
import { AlertTypes } from "src/app/models/enums/alert-types.enum";
import { Alert } from "src/app/models/alert.model";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.scss"]
})
export class AlertComponent implements OnInit {
  public alert: Alert = new Alert();
  public alertTypes = AlertTypes;
  public isShown: boolean = true;
  public isNeeded: boolean = false;

  constructor(
    public alertService?: AlertService,
    public localStorage?: ALocalStorageService
  ) {}

  public ngOnInit(): void {
    this.alertService.alertSubject.asObservable().subscribe(data => {
      this.alert = new Alert(data);
    });
    this.mustCallAlerts();
  }

  public close(): void {
    this.isShown = false;
    this.localStorage.setItem(this.alert.key, "true");
  }

  private mustCallAlerts(): void {
    if (!this.localStorage.getItem(LocalStorageKey.CookieNotification)) {
      this.callCookieNotification();
    }
  }

  private callCookieNotification(): void {
    this.isNeeded = true;

    this.alert = new Alert({
      type: AlertTypes.Info,
      title: "What do we use cookies for?",
      content:
        "We use cookies to recognize your repeat visits and preferences, as well as to measure the effectiveness of campaign and analyze traffic.",
      key: LocalStorageKey.CookieNotification
    });
  }
}
