import { AboutComponent } from "./about.component";

describe("About Component", () => {
  it("Exist", () => {
    // assert
    expect(AboutComponent).toBeDefined();
  });
  it("Can be built", () => {
    //act
    const component = new AboutComponent();
    // assert
    expect(component instanceof AboutComponent).toBe(true);
  });
});
