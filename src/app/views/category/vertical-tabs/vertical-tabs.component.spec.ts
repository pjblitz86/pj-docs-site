import { VerticalTabsComponent } from "./vertical-tabs.component";

describe("Vertical Tabs Component", () => {
  it("Exist", () => {
    // assert
    expect(VerticalTabsComponent).toBeDefined();
  });
  it("Can be built", () => {
    //act
    const component = new VerticalTabsComponent();
    // assert
    expect(component instanceof VerticalTabsComponent).toBe(true);
  });
});
