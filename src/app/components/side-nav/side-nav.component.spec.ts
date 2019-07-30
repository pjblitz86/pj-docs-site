import { SideNavComponent } from "./side-nav.component";

describe("Side Nav Component", () => {
  it("Exist", () => {
    // assert
    expect(SideNavComponent).toBeDefined();
  });
  it("Can be built", () => {
    //act
    const component = new SideNavComponent();
    // assert
    expect(component instanceof SideNavComponent).toBe(true);
  });
  describe("General", () => {
    let component: SideNavComponent;
    beforeEach(() => {
      component = new SideNavComponent();
    });
  });
});
