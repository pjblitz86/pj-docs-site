import { CategoryComponent } from "./category.component";
import { ACategoryService } from "src/app/services/category/acategory.service";
import { MockCategoryService } from "src/app/services/category/mock.category.service";
import { Categories } from "src/app/models/enums/Category.enum";
import { MockActivatedRoute } from "src/app/shared/mocks/mock-activated-route";
import { of } from "rxjs";

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
      activatedRoute = new MockActivatedRoute();
      activatedRoute.params = of({ id: Categories.JavaScript });
      categoryService = new MockCategoryService();
      component = new CategoryComponent(activatedRoute, categoryService);
    });

    describe("On Init", () => {
      it("Updates category", async () => {
        // arrange
        component.category = null;
        // act
        await component.ngOnInit();
        // assert
        expect(component.category.id).toBe(Categories.JavaScript);
      });
    });
  });
});
