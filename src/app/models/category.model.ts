import { Topic } from "./topic.model";
import { Categories } from "./enums/Category.enum";
import { JAVASCRIPT_DATA } from "./data/javascript";
import { TabContainer } from "./tab-container.model";

export class Category {
  public id: string;
  public title: string;
  public description: string;
  public topics: Topic[];
  public iconClasses: string;
  public tabContainers: TabContainer[];

  constructor(data?: any) {
    const defaults = {
      id: "",
      title: "",
      description: "",
      topics: [],
      iconClasses: "",
      tabContainers: [],
      ...data
    };

    this.id = defaults.id;
    this.title = defaults.title;
    this.description = defaults.description;
    this.topics = defaults.topics.map(topic => new Topic(topic));
    this.iconClasses = this.getIconClasses(this.id);
    this.tabContainers = defaults.tabContainers.map(
      tabContainer => new TabContainer(tabContainer)
    );
  }

  private getIconClasses(id: string): string {
    switch (id) {
      case Categories.JavaScript:
        return "fab fa-js";

      default:
        return "";
    }
  }
}
