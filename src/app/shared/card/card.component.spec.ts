import { CardComponent } from "./card.component";

describe("Card Component", () => {
  it("Exist", () => {
    // assert
    expect(CardComponent).toBeDefined();
  });
  it("Can be built", () => {
    //act
    const component = new CardComponent();
    // assert
    expect(component instanceof CardComponent).toBe(true);
  });
});
