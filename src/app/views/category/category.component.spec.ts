import { CategoryComponent } from "./category.component";

describe("Category Component", () => {
  it("Exist", () => {
    // assert
    expect(CategoryComponent).toBeDefined();
  });
  it("Can be built", () => {
    //act
    const component = new CategoryComponent();
    // assert
    expect(component instanceof CategoryComponent).toBe(true);
  });
  describe("General", () => {
    let component: CategoryComponent;
    beforeEach(() => {
      component = new CategoryComponent();
    });
  });
});
