import { SupportComponent } from "./support.component";

describe("Support Component", () => {
  it("Exist", () => {
    // assert
    expect(SupportComponent).toBeDefined();
  });
  it("Can be built", () => {
    //act
    const component = new SupportComponent();
    // assert
    expect(component instanceof SupportComponent).toBe(true);
  });
});
