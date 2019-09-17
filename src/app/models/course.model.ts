export class Course {
  public imageUrl: string;
  public title: string;
  public author: string;
  public authorImage: string;
  public time: string;
  public courseUrl: string;

  constructor(data?: any) {
    const defaults = {
      imageUrl: "https://via.placeholder.com/320x180",
      title: "",
      author: "",
      time: "",
      authorImage: "",
      courseUrl: "",
      ...data
    };

    this.imageUrl = defaults.imageUrl;
    this.title = defaults.title;
    this.author = defaults.author;
    this.authorImage = defaults.authorImage;
    this.time = defaults.time;
    this.courseUrl = defaults.courseUrl;
  }
}
