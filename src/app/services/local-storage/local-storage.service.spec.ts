import { LocalStorage } from "./local-storage.service";

describe("LocalStorage Service Component", () => {
  it("Exist", () => {
    // assert
    expect(LocalStorage).toBeDefined();
  });
  it("Can be built", () => {
    //act
    const service = new LocalStorage();
    // assert
    expect(service instanceof LocalStorage).toBe(true);
  });

  describe("General", () => {
    let service: LocalStorage;

    beforeEach(() => {
      service = new LocalStorage();
    });

    it("Gets item", () => {
      //arrange
      const key = "someKey";
      spyOn(localStorage, "getItem");

      //act
      service.getItem(key);

      //assert
      expect(localStorage.getItem).toHaveBeenCalledWith(key);
    });

    it("Sets item", () => {
      //arrange
      const key = "someKey";
      const value = "someValue";

      spyOn(localStorage, "setItem");

      //act
      service.setItem(key, value);

      //assert
      expect(localStorage.setItem).toHaveBeenCalledWith(key, value);
    });
  });
});
