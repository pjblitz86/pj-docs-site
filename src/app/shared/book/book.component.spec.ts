import { BookComponent } from "./book.component";

describe("Book Component", () => {
  it("Exist", () => {
    // assert
    expect(BookComponent).toBeDefined();
  });
  it("Can be built", () => {
    //act
    const component = new BookComponent();
    // assert
    expect(component instanceof BookComponent).toBe(true);
  });
});
