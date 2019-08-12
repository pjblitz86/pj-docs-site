import { AlertComponent } from "./alert.component";

describe("Alert Component", () => {
  it("Exist", () => {
    // assert
    expect(AlertComponent).toBeDefined();
  });
  it("Can be built", () => {
    //act
    const component = new AlertComponent();
    // assert
    expect(component instanceof AlertComponent).toBe(true);
  });
});
