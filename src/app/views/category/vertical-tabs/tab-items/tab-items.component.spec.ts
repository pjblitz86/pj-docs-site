import { TabItemsComponent } from "./tab-items.component";
import { Tab } from "src/app/models/tab.model";

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

  describe("General", () => {
    let component: TabItemsComponent;

    beforeEach(() => {
      component = new TabItemsComponent();
    });

    describe("On Init", () => {
      it("Makes first tab selected", () => {
        // arrange
        const answerTab = new Tab({ label: "simple" });
        component.tabItems = [answerTab, new Tab()];
        // act
        component.ngOnInit();
        // assert
        expect(component.selectedTabItem).toEqual(answerTab);
      });
    });

    describe("Select Tab Item", () => {
      it("Updates selected tab", () => {
        // arrange
        component.selectedTabItem = null;
        const answerTab = new Tab({ label: "simple" });

        // act
        component.selectTabItem(answerTab);

        // assert
        expect(component.selectedTabItem).toBe(answerTab);
      });
    });
  });
});
