import { AppComponent } from "./app.component";

describe("App Component", () => {
  it("Exist", () => {
    // assert
    expect(AppComponent).toBeDefined();
  });
  it("Can be built", () => {
    //act
    const component = new AppComponent(null);
    // assert
    expect(component instanceof AppComponent).toBe(true);
  });
});
