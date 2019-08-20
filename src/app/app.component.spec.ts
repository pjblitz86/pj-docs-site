import { AppComponent } from "./app.component";
import { MockRouter } from "./services/mocks/mock.router";
import { MockTitleService } from "./services/mocks/mock.title.service";

describe("App Component", () => {
  it("Exist", () => {
    // assert
    expect(AppComponent).toBeDefined();
  });
  it("Can be built", () => {
    //act
    const component = new AppComponent(null, null);
    // assert
    expect(component instanceof AppComponent).toBe(true);
  });

  describe("General", () => {
    let component: AppComponent;
    let mockRouter: any;
    let mockTitleService: any;

    beforeEach(() => {
      mockRouter = new MockRouter();
      mockTitleService = new MockTitleService();

      component = new AppComponent(mockRouter, mockTitleService);
    });

    describe("On Init", () => {
      // it("Only pushes through NavigationEnd events", () => {
      //   //assert
      //   mockTitleService.lastTitle = "";
      //   //act
      //   component.ngOnInit();
      //   //assert
      //   expect(mockTitleService.lastTitle).toBe("");
      // });
      // it("On URL navigationend update title for default", () => {
      //   const navigationEnd = {id: 1, url: "", urlAfterRedirects: ''}
      //   //arrange
      //   mockRouter.routerEvent = navigationEnd;
      //   //act
      //   component.ngOnInit();
      //   //assert
      //   expect(mockTitleService.lastTitle).toBe("Video Dev Docs | VDD");
      // });
    });
  });
});
