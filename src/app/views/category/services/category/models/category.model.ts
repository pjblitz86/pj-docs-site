import { Topic } from "./topic.model";

export class Category {
  public id: string;
  public title: string;
  public description: string;
  public topics: Topic[];

  constructor(data?: any) {
    const defaults = {
      id: "",
      title: "",
      description: "",
      topics: [],
      ...data
    };

    this.id = defaults.id;
    this.title = defaults.title;
    this.description = defaults.description;
  }
}
