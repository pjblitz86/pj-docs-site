import { StarListComponent } from "./star-list.component";

describe("StarList Component", () => {
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

  describe("General", () => {
    let component: StarListComponent;

    beforeEach(() => {
      component = new StarListComponent();
    });

    describe("Defaults", () => {
      it("rating has 5 stars when no rating", () => {
        //assert
        expect(component.rating).toBe(5);
      });
    });

    describe("General", () => {
      it("Gets full star rating", () => {
        //arrange
        component.rating = 4.75;

        //act
        const result = component.fullStars;

        // assert
        expect(result.length).toBe(4);
      });

      describe("Half star rating", () => {
        it("Shows half star rating when not highest rating", () => {
          //arrange
          component.rating = 4.75;

          //act
          const result = component.hasHalfStar;

          // assert
          expect(result).toBe(true);
        });

        it("Doesnt show half star rating when highest rating", () => {
          //arrange
          component.rating = 5;

          //act
          const result = component.hasHalfStar;

          // assert
          expect(result).toBe(false);
        });
      });

      it("Gets empty star rating", () => {
        //arrange
        component.rating = 2.75;

        //act
        const result = component.emptyStars;

        // assert
        expect(result.length).toBe(2);
      });
    });
  });
});
