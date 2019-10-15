import { BreadCrumbsComponent } from "./bread-crumbs.component";
import { MockBreadCrumbsService } from "src/app/services/bread-crumbs/mock-bread-crumbs.service";
import { componentFactoryName } from "@angular/compiler";
import { BreadCrumb } from "src/app/models/bread-crumb.model";

describe("Bread Crumbs Component", () => {
  it("Exist", () => {
    // assert
    expect(BreadCrumbsComponent).toBeDefined();
  });
  it("Can be built", () => {
    //act
    const component = new BreadCrumbsComponent(null);
    // assert
    expect(component instanceof BreadCrumbsComponent).toBe(true);
  });

  describe("General", () => {
    let component: BreadCrumbsComponent;
    let mockBreadCrumbsService: MockBreadCrumbsService;

    beforeEach(() => {
      mockBreadCrumbsService = new MockBreadCrumbsService();
      component = new BreadCrumbsComponent(mockBreadCrumbsService as any);
    });
    describe("On Init", () => {
      it("updates bread crumbs", () => {
        // arrange
        component.breadCrumbs = [];
        mockBreadCrumbsService.breadCrumbs = [
          new BreadCrumb({ urlPiece: "javascript" }),
          new BreadCrumb({ urlPiece: "arrays" })
        ];
        // act
        component.ngOnInit();

        // assert
        expect(component.breadCrumbs[0].label).toEqual("Javascript");
        expect(component.breadCrumbs[1].label).toEqual("arrays");
      });
    });
  });
});
