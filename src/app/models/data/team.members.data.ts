import { TeamMember } from "../team-member.model";
import { SocialMedia } from "../social-media.model";

export const TEAM_MEMBERS_DATA = [
  new TeamMember({
    firstName: "Paul",
    middleName: "P",
    lastName: "Jukman",
    photo: "assets/team/PaulJukman.jpg",
    occupation: "developer",
    description1:
      "Paul teaches students to his own abilities on softwate development",
    description2: "He has some projects on GitHub",
    socialMedia: [
      new SocialMedia({
        url: "https://www.linkedin.com/in/paulius-juknis-497040144/",
        iconClasses: "fab fa-linkedin"
      }),
      new SocialMedia({
        url: "https://github.com/pjblitz86",
        iconClasses: "fab fa-github"
      }),
      new SocialMedia({
        url: "https://www.youtube.com/",
        iconClasses: "fab fa-youtube"
      })
    ]
  }),
  new TeamMember({
    firstName: "Peter",
    middleName: "P",
    lastName: "Jukman",
    photo: "assets/team/PaulJukman.jpg",
    occupation: "developer",
    description1:
      "Paul teaches students to his own abilities on softwate development",
    description2: "He has some projects on GitHub",
    socialMedia: [
      new SocialMedia({
        url: "https://www.linkedin.com/in/paulius-juknis-497040144/",
        iconClasses: "fab fa-linkedin"
      }),
      new SocialMedia({
        url: "https://github.com/pjblitz86",
        iconClasses: "fab fa-github"
      }),
      new SocialMedia({
        url: "https://www.youtube.com/",
        iconClasses: "fab fa-youtube"
      })
    ]
  })
];
