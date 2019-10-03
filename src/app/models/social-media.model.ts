export class SocialMedia {
  public url: string;
  public iconClasses: string;

  constructor(data?: any) {
    const defaults = {
      url: "",
      iconClasses: "",
      ...data
    };

    this.url = defaults.url;
    this.iconClasses = defaults.iconClasses;
  }
}
