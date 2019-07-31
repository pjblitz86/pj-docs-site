import { CategoryService } from "./category.service";

describe("Category Service Component", () => {
  it("Exist", () => {
    // assert
    expect(CategoryService).toBeDefined();
  });
  it("Can be built", () => {
    //act
    const component = new CategoryService();
    // assert
    expect(component instanceof CategoryService).toBe(true);
  });
  describe("General", () => {
    let component: CategoryService;
    beforeEach(() => {
      component = new CategoryService();
    });
  });
});
