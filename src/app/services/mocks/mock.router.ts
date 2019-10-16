import { Observable } from "rxjs";
import { NavigationEnd } from "@angular/router";

export class MockRouter {
  public url = "";
  public routerObservable = new Observable(observer => {
    observer.next(this.routerEvent);
    observer.complete();
  });

  public routerEvent: NavigationEnd;

  public get events() {
    return this.routerObservable;
  }
}
