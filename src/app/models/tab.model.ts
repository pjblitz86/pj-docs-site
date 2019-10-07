export class Tab {
  public label: string;
  public iconClasses: string;
  public isActive: boolean;

  constructor(data?: any) {
    const defaults = {
      label: "",
      iconClasses: "",
      isActive: false,
      ...data
    };

    this.label = defaults.label;
    this.iconClasses = defaults.iconClasses;
    this.isActive = defaults.isActive;
  }
}
