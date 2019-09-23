import { TitleService } from "./title.service";
// import { NavigationEnd } from "@angular/router";
// import { MockRouter } from "../mocks/mock.router";
// import { MockTitleService } from "../mocks/mock.title.service";

describe("Title Service", () => {
  it("Exists", () => {
    //assert
    expect(TitleService).toBeDefined();
  });

  it("Can be built", () => {
    //act
    const service = new TitleService(null, null);

    //assert
    expect(service instanceof TitleService).toBe(true);
  });

  // CANT TEST THIS PART
  // describe("General", () => {
  //   let mockTitleService: any;
  //   let mockRouter: any;
  //   let service: TitleService;

  //   beforeEach(() => {
  //     mockTitleService = new MockTitleService();
  //     mockRouter = new MockRouter();
  //     service = new TitleService(mockRouter, mockTitleService);
  //   });

  //   describe("On Init title update", () => {
  //     it("Only pushes through NavigationEnd events", () => {
  //       //assert
  //       mockTitleService.lastTitle = "";
  //       //act
  //       service.init();
  //       //assert
  //       expect(mockTitleService.lastTitle).toBe("");
  //     });

  //     it("On URL navigationend update title for default", () => {
  //       const navigationEnd = new NavigationEnd(1, "", "");
  //       //arrange
  //       mockRouter.routerEvent = navigationEnd;
  //       //act
  //       service.init();
  //       //assert
  //       expect(mockTitleService.lastTitle).toBe("Video Dev Docs | VDD");
  //     });

  //     it("If url has hash remove it", () => {
  //       //arrange
  //       const navigationEnd = new NavigationEnd(
  //         1,
  //         "/category/HTML#books",
  //         "/category/HTML#books"
  //       );
  //       mockRouter.routerEvent = navigationEnd;

  //       //act
  //       service.init();

  //       //assert
  //       expect(mockTitleService.lastTitle).toBe("HTML | VDD");
  //     });
  //     describe("Two levels deep", () => {
  //       it("Category -> Javascript route formatted properly", () => {
  //         //arrange
  //         const navigationEnd = new NavigationEnd(
  //           1,
  //           "/category/javascript#books",
  //           "/category/javascript#books"
  //         );
  //         mockRouter.routerEvent = navigationEnd;

  //         //act
  //         service.init();

  //         //assert
  //         expect(mockTitleService.lastTitle).toBe("Javascript | VDD");
  //       });
  //       it("Category -> ANY_NON_CUSTOM_ROUTE is uppercased", () => {
  //         //arrange
  //         const navigationEnd = new NavigationEnd(
  //           1,
  //           "/category/html",
  //           "/category/html"
  //         );
  //         mockRouter.routerEvent = navigationEnd;

  //         //act
  //         service.init();

  //         //assert
  //         expect(mockTitleService.lastTitle).toBe("HTML | VDD");
  //       });
  //     });
  //   });
  // });
});
