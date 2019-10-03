import { SocialMedia } from "./social-media.model";

export class TeamMember {
  public firstName: string;
  public middleName: string;
  public lastName: string;
  public occupation: string;
  public description1: string;
  public description2: string;
  public socialMedia: SocialMedia[];

  constructor(data?: any) {
    const defaults = {
      firstName: "",
      middleName: "",
      lastName: "",
      occupation: "",
      description1: "",
      description2: "",
      socialMedia: [],
      ...data
    };

    this.firstName = defaults.firstName;
    this.middleName = defaults.middleName;
    this.lastName = defaults.lastName;
    this.occupation = defaults.occupation;
    this.description1 = defaults.description1;
    this.description2 = defaults.description2;
    this.socialMedia = defaults.socialMedia.map(
      media => new SocialMedia(media)
    );
  }

  public get fullName(): string {
    return `${this.firstName} ${this.middleName[0]}. ${this.lastName}`;
  }
}
