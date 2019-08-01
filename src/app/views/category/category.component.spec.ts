import { CategoryComponent } from "./category.component";
import { ACategoryService } from "./services/category/acategory.service";
import { MockCategoryService } from "./services/category/mock.category.service";
import { Observable, observable, BehaviorSubject } from "rxjs";
import { convertToParamMap } from "@angular/router";

describe("Category Component", () => {
  it("Exist", () => {
    // assert
    expect(CategoryComponent).toBeDefined();
  });
  it("Can be built", () => {
    //act
    const component = new CategoryComponent(null, null);
    // assert
    expect(component instanceof CategoryComponent).toBe(true);
  });
  describe("General", () => {
    let component: CategoryComponent;
    let categoryService: ACategoryService;
    let activatedRoute: any;

    beforeEach(() => {
      const observable = new BehaviorSubject(
        convertToParamMap({ id: "javascript" })
      ).asObservable();
      activatedRoute = observable;
      categoryService = new MockCategoryService();
      component = new CategoryComponent(activatedRoute, categoryService);
    });
    describe("On Init", () => {
      // it("Updates category", async () => {
      //   // arrange
      //   component.category = null;
      //   // act
      //   await component.ngOnInit();
      //   // assert
      //   expect(component.category.id).toBe("javascript");
      // });
    });
  });
});
