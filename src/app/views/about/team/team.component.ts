import { Component } from "@angular/core";
import { TeamMember } from "src/app/models/team-member.model";
import { TEAM_MEMBERS_DATA } from "src/app/models/data/team.members.data";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.scss"]
})
export class TeamComponent {
  public currentTeamMember = TEAM_MEMBERS_DATA[0];
  public teamMembers = TEAM_MEMBERS_DATA;

  public selectTeamMember(teamMember: TeamMember): void {
    this.currentTeamMember = teamMember;
  }
}
