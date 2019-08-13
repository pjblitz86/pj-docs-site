import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Alert } from "src/app/models/enums/alert.enum";

@Injectable({
  providedIn: "root"
})
export class AlertService {
  public alertSubject = new Subject();

  public callAlert(
    type: Alert,
    title: string,
    content: string,
    localStorageKey: string
  ) {
    this.alertSubject.next({ type, title, content, localStorageKey });
  }
}
