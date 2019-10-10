import { DynamicContentComponent } from "./dynamic-content.component";

describe("Dynamic Content Component", () => {
  it("Exist", () => {
    // assert
    expect(DynamicContentComponent).toBeDefined();
  });
  it("Can be built", () => {
    //act
    const component = new DynamicContentComponent(null);
    // assert
    expect(component instanceof DynamicContentComponent).toBe(true);
  });

  describe("General", () => {
    let component: DynamicContentComponent;
    let mockComponentFactoryResolver: any;

    beforeEach(() => {
      mockComponentFactoryResolver = {
        resolveComponentFactory(type) {
          return () => `Created ${type}`;
        }
      };

      component = new DynamicContentComponent(mockComponentFactoryResolver);

      component.context = { title: "Example" };
      component.container = {
        createComponent() {
          return {
            instance: {
              title: "HELLO PAUL"
            }
          };
        }
      } as any;
      component.type = "resources";
    });

    describe("On init", () => {
      it("Instantiates a component", () => {
        // act
        component.ngOnInit();

        // assert
        expect(component.container).toBeDefined();
      });

      it("Updates input", () => {
        // arrange
        spyOn(component, "updateInputs");

        // act
        component.ngOnInit();

        // assert
        expect(component.updateInputs).toHaveBeenCalled();
      });
    });
  });
});
