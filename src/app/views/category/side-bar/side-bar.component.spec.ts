import { SideBarComponent } from "./side-bar.component";

describe("side-bar Component", () => {
  it("Exist", () => {
    // assert
    expect(SideBarComponent).toBeDefined();
  });
  it("Can be built", () => {
    //act
    const component = new SideBarComponent();
    // assert
    expect(component instanceof SideBarComponent).toBe(true);
  });
});
