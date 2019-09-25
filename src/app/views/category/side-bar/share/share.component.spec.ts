import { ShareComponent } from "./share.component";
import { MockTitleService } from "src/app/services/mocks/mock.title.service";
import { MockRouter } from "src/app/services/mocks/mock.router";

describe("Share Component", () => {
  it("Exist", () => {
    // assert
    expect(ShareComponent).toBeDefined();
  });
  it("Can be built", () => {
    //act
    const component = new ShareComponent(null, null);
    // assert
    expect(component instanceof ShareComponent).toBe(true);
  });

  describe("General", () => {
    let component: ShareComponent;
    let mockTitleService: MockTitleService;
    let mockRouter: MockRouter;

    beforeEach(() => {
      mockTitleService = new MockTitleService();
      mockRouter = new MockRouter();
      component = new ShareComponent(
        mockTitleService as any,
        mockRouter as any
      );
    });

    describe("Linkedin message", () => {
      it("Gets linkedin link with a proper base", () => {
        // arrange
        const base = "https://www.linkedin.com/shareArticle?mini=true";

        // act
        const result = component.linkedinMessage;

        // assert
        expect(result.includes(base)).toBe(true);
      });
    });
  });
});
