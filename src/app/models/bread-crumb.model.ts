import { DISPLAY_META_DATA } from "../models/data/display-meta-data.data";

export class BreadCrumb {
  public label: string;
  public urlPiece: string;
  public iconClasses: string;

  constructor(data?: any) {
    const defaults = {
      urlPiece: "",
      ...data
    };

    this.label = this.getLabel(defaults.urlPiece);
    this.urlPiece = defaults.urlPiece;
    this.iconClasses = this.getIconClasses(defaults.urlPiece);
  }

  private getLabel(urlPiece): string {
    if (DISPLAY_META_DATA.hasOwnProperty(urlPiece)) {
      return DISPLAY_META_DATA[urlPiece].label;
    }
    return urlPiece;
  }

  private getIconClasses(urlPiece: string): string {
    if (DISPLAY_META_DATA.hasOwnProperty(urlPiece)) {
      return DISPLAY_META_DATA[urlPiece].iconClasses;
    }
    return "";
  }
}
