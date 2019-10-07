import { TabItemsComponent } from "./tab-items.component";

describe("Tab Items Component", () => {
  it("Exist", () => {
    // assert
    expect(TabItemsComponent).toBeDefined();
  });
  it("Can be built", () => {
    //act
    const component = new TabItemsComponent();
    // assert
    expect(component instanceof TabItemsComponent).toBe(true);
  });

  describe("General", () => {});
});
