import { Component, Input } from "@angular/core";
import { Book } from "src/app/models/book.model";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.scss"]
})
export class BookComponent {
  @Input() public book: Book = new Book({ rating: 2.5 });
}
