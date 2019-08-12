import { StarListComponent } from "./star-list.component";

describe("Book Component", () => {
  it("Exist", () => {
    // assert
    expect(StarListComponent).toBeDefined();
  });
  it("Can be built", () => {
    //act
    const component = new StarListComponent();
    // assert
    expect(component instanceof StarListComponent).toBe(true);
  });
});
