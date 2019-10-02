import { QuoteComponent } from "./quote.component";

describe("Quote Component", () => {
  it("Exist", () => {
    // assert
    expect(QuoteComponent).toBeDefined();
  });
  it("Can be built", () => {
    //act
    const component = new QuoteComponent();
    // assert
    expect(component instanceof QuoteComponent).toBe(true);
  });
});
