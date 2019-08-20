import { BehaviorSubject } from "rxjs";

export class MockRouter {
  public routerSubject = new BehaviorSubject<any>({});
  public routerEvent: any;
  public get events() {
    return this.routerSubject.next(this.routerEvent);
  }
}
