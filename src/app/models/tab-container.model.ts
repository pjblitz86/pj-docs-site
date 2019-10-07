import { Tab } from "./tab.model";

export class TabContainer {
  public title: string;
  public tabItems: Tab[];

  constructor(data?: any) {
    const defaults = {
      title: "",
      tabItems: [],
      ...data
    };
    this.title = defaults.title;
    this.tabItems = defaults.tabItems.map(tabItem => new Tab(tabItem));
  }
}
