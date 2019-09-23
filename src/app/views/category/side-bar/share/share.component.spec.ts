import { ShareComponent } from "./share.component";

describe("side-bar Component", () => {
  it("Exist", () => {
    // assert
    expect(ShareComponent).toBeDefined();
  });
  it("Can be built", () => {
    //act
    const component = new ShareComponent();
    // assert
    expect(component instanceof ShareComponent).toBe(true);
  });
});
