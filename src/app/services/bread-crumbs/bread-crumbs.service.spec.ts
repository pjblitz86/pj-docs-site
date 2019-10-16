import { BreadCrumbsService } from "./bread-crumbs.service";
import { MockRouter } from "../mocks/mock.router";
import { NavigationEnd } from "@angular/router";

describe("Default", () => {
  it("Exists", () => {
    // assert
    expect(BreadCrumbsService).toBeDefined();
  });
  it("Can be built", () => {
    // arrange
    const mockRouter = new MockRouter();

    //act
    const service = new BreadCrumbsService(mockRouter as any);
    // assert
    expect(service instanceof BreadCrumbsService).toBe(true);
  });

  describe("General", () => {
    let mockRouter: MockRouter;
    let service: BreadCrumbsService;

    describe("On navigation end", () => {
      it("Sets bread crumbs", () => {
        // arrange
        const navigationEnd = new NavigationEnd(
          1,
          "category/javascript/arrays",
          "category/javascript/arrays#books"
        );
        mockRouter = new MockRouter();
        mockRouter.routerEvent = navigationEnd;
        service = new BreadCrumbsService(mockRouter as any);

        // assert
        expect(service.breadCrumbs[0].label).toBe("Javascript");
        expect(service.breadCrumbs[1].label).toBe("arrays");
      });
      it("Removes hash from bread crumbs url piece", () => {});
    });
  });
});
