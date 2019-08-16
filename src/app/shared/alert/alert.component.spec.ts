import { AlertComponent } from "src/app/shared/alert/alert.component";
import { AlertService } from "src/app/services/alert/alert.service";
import { MockLocalStorageService } from "src/app/services/mocks/mock-local-storage";
import { LocalStorageKey } from "src/app/models/enums/local.storage-key.enum";

describe("AlertService Component", () => {
  it("Exist", () => {
    // assert
    expect(AlertService).toBeDefined();
  });
  it("Can be built", () => {
    //arrange
    const alertService = new AlertService();
    const mockLocalStorageService = new MockLocalStorageService();

    //act
    const component = new AlertComponent(alertService, mockLocalStorageService);

    // assert
    expect(component instanceof AlertComponent).toBe(true);
  });

  describe("General", () => {
    let component: AlertComponent;
    let alertService: AlertService;
    let mockLocalStorageService: MockLocalStorageService;

    beforeEach(() => {
      mockLocalStorageService = new MockLocalStorageService();
      alertService = new AlertService();
      component = new AlertComponent(alertService, mockLocalStorageService);
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

      it("Updates storage so alert is called just once", () => {
        //arrange
        const key = LocalStorageKey.CookieNotification;
        component.localStorageKey = key;

        //act
        component.close();

        //assert
        expect(mockLocalStorageService.storage[key]).toBe("true");
      });
    });
  });
});
