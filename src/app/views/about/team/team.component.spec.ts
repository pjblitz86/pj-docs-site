import { TeamComponent } from "./team.component";

describe("Team Component", () => {
  it("Exist", () => {
    // assert
    expect(TeamComponent).toBeDefined();
  });
  it("Can be built", () => {
    //act
    const component = new TeamComponent();
    // assert
    expect(component instanceof TeamComponent).toBe(true);
  });
});
