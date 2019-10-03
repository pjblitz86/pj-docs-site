import { TeamComponent } from "./team.component";
import { TEAM_MEMBERS_DATA } from "src/app/models/data/team.members.data";

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

  describe("General", () => {
    let component: TeamComponent;

    beforeEach(() => {
      component = new TeamComponent();
    });

    describe("Defaults", () => {
      it("Current team member is PJ", () => {
        // arrange
        const teamMembers = TEAM_MEMBERS_DATA;

        // assert
        expect(component.currentTeamMember).toBe(teamMembers[0]);
      });

      it("Gets team members", () => {
        // arrange
        const teamMembers = TEAM_MEMBERS_DATA;

        // assert
        expect(component.teamMembers).toBe(teamMembers);
      });
    });

    describe("Select team member", () => {
      it("Updates team members", () => {
        //arrange
        const teamMember = TEAM_MEMBERS_DATA[0];
        component.currentTeamMember = null;

        // act
        component.selectTeamMember(teamMember);

        // assert
        expect(component.selectTeamMember).toBe(teamMember);
      });
    });
  });
});
