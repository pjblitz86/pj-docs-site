import { AlertService } from "./alert.service";
import { Subject } from "rxjs";
import { AlertTypes } from "src/app/models/enums/alert-types.enum";
import { Alert } from "src/app/models/alert.model";

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
        const type = AlertTypes.Info;
        const title = "some title";
        const content = "some content";
        const key = "some key";

        const alert = new Alert({ type, title, content, key });

        // assert
        service.alertSubject.subscribe((data: any) => {
          expect(data.type).toBe(type);
          expect(data.title).toBe(title);
          expect(data.content).toBe(content);
          expect(data.key).toBe(key);
          done();
        });

        //act
        service.callAlert(alert);
      });
    });
  });
});
