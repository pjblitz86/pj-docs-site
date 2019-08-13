import { AlertComponent } from "src/app/shared/alert/alert.component";
import { AlertService } from "src/app/services/alert/alert.service";

describe("AlertService Component", () => {
  it("Exist", () => {
    // assert
    expect(AlertService).toBeDefined();
  });
  it("Can be built", () => {
    //arrange
    const alertService = new AlertService();

    //act
    const component = new AlertComponent(alertService);

    // assert
    expect(component instanceof AlertComponent).toBe(true);
  });

  describe("General", () => {
    let component: AlertComponent;
    let alertService: AlertService;

    beforeEach(() => {
      alertService = new AlertService();
      component = new AlertComponent(alertService);
    });

    describe("Close", () => {
      it("Closes alert", () => {
        //arrange
        component.isShown = true;

        //act
        component.close();

        //assert
        expect(component.isShown).toBe(false);
      });
    });
  });
});
