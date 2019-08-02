export class Book {
  public imageUrl: string;
  public title: string;
  public description: string;
  public href: string;
  public rating: number;

  constructor(data?: any) {
    const defaults = {
      imageUrl: "https://via.placeholder.com/75x100",
      title: "",
      description: "",
      href: "",
      rating: 5,
      ...data
    };

    this.imageUrl = defaults.imageUrl;
    this.title = defaults.title;
    this.description = defaults.description;
    this.href = defaults.href;
    this.rating = defaults.rating;
  }
}
