import { ModalComponent } from "./modal.component";

describe("Modal Component", () => {
  it("Exist", () => {
    // assert
    expect(ModalComponent).toBeDefined();
  });
  it("Can be built", () => {
    //act
    const component = new ModalComponent();
    // assert
    expect(component instanceof ModalComponent).toBe(true);
  });
  describe("General", () => {
    let component: ModalComponent;
    beforeEach(() => {
      component = new ModalComponent();
    });
  });
});
