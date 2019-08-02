import { ResourcesComponent } from "./resources.component";

describe("Resources Component", () => {
  it("Exist", () => {
    // assert
    expect(ResourcesComponent).toBeDefined();
  });
  it("Can be built", () => {
    //act
    const component = new ResourcesComponent();
    // assert
    expect(component instanceof ResourcesComponent).toBe(true);
  });
});
