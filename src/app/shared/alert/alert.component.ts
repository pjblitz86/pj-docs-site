import { Component, Input, OnInit } from "@angular/core";
import { Alert } from "src/app/models/enums/alert.enum";
import { AlertService } from "src/app/services/alert/alert.service";
import { ALocalStorageService } from "src/app/services/local-storage/alocal-storage.service";
import { LocalStorageKey } from "src/app/models/enums/local.storage-key.enum";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.scss"]
})
export class AlertComponent implements OnInit {
  public type: Alert = Alert.Info;
  public title: string = "";
  public content: string = "";

  public alertTypes = Alert;
  public isShown: boolean = true;
  public isNeeded: boolean = false;
  public localStorageKey: LocalStorageKey;

  constructor(
    public alertService?: AlertService,
    public localStorage?: ALocalStorageService
  ) {}

  public ngOnInit(): void {
    this.alertService.alertSubject.asObservable().subscribe(data => {
      console.log(data);
    });
    this.mustCallAlerts();
  }

  public close(): void {
    this.isShown = false;
    this.localStorage.setItem(this.localStorageKey, "true");
  }

  private async mustCallAlerts(): Promise<void> {
    if (!this.localStorage.getItem(LocalStorageKey.CookieNotification)) {
      this.callCookieNotification();
    }
  }

  private callCookieNotification() {
    this.type = Alert.Info;
    this.title = "'What do we use cookies for?'";
    this.content =
      "'We use cookies to recognize your repeat visits and preferences, as well as to measure the effectiveness of campaign and analyze traffic.'";
    this.localStorageKey = LocalStorageKey.CookieNotification;

    this.isNeeded = true;
    this.localStorageKey = LocalStorageKey.CookieNotification;
  }
}
