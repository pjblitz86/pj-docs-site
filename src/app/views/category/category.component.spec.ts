import { CategoryComponent } from "./category.component";

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
});
