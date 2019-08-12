import { AlertComponent } from "./alert.component";
import { Component } from "@angular/core";

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

  describe("General", () => {
    let component: AlertComponent;

    beforeEach(() => {
      component = new AlertComponent();
    });

    describe("Close", () => {
      it("Closes alert", () => {
        //arrange
        component.isShown = true;

        //act
        component.close();

        //assert
        expect(component.isShown).toBe(false);
      });
    });
  });
});
