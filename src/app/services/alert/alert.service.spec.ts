import { AlertService } from "./alert.service";
import { Subject } from "rxjs";
import { Alert } from "src/app/models/enums/alert.enum";

describe("Alert Service Component", () => {
  it("Exist", () => {
    // assert
    expect(AlertService).toBeDefined();
  });
  it("Can be built", () => {
    //act
    const service = new AlertService();
    // assert
    expect(service instanceof AlertService).toBe(true);
  });
  describe("General", () => {
    let service: AlertService;

    beforeEach(() => {
      service = new AlertService();
    });

    describe("Defaults", () => {
      it("Has alert subject", () => {
        //assert
        expect(service.alertSubject instanceof Subject).toBe(true);
      });
    });

    describe("Call alert", () => {
      it("Pushes next alert data", done => {
        // arrange
        const type = Alert.Info;
        const title = "some title";
        const content = "some content";
        const localStorageKey = "some key";

        // assert
        service.alertSubject.subscribe((data: any) => {
          expect(data.type).toBe(type);
          expect(data.title).toBe(title);
          expect(data.content).toBe(content);
          expect(data.localStorageKey).toBe(localStorageKey);
          done();
        });

        //act
        service.callAlert(type, title, content, localStorageKey);
      });
    });
  });
});
