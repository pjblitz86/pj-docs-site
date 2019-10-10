import { BreadCrumbsComponent } from "./bread-crumbs.component";

describe("Bread Crumbs Component", () => {
  it("Exist", () => {
    // assert
    expect(BreadCrumbsComponent).toBeDefined();
  });
  it("Can be built", () => {
    //act
    const component = new BreadCrumbsComponent();
    // assert
    expect(component instanceof BreadCrumbsComponent).toBe(true);
  });
});
