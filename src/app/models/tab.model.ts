export class Tab {
  public label: string;
  public iconClasses: string;

  constructor(data?: any) {
    const defaults = {
      label: "",
      iconClasses: "",
      ...data
    };

    this.label = defaults.label;
    this.iconClasses = defaults.iconClasses;
  }
}
