import { NgModule } from "@angular/core";
import { ModalComponent } from "./modal/modal.component";
import { CardComponent } from "./card/card.component";
import { BookComponent } from "./book/book.component";
import { CommonModule } from "@angular/common";
import { StarListComponent } from "./star-list/star-list.component";

@NgModule({
  imports: [CommonModule],
  declarations: [
    ModalComponent,
    CardComponent,
    BookComponent,
    StarListComponent
  ],
  exports: [ModalComponent, CardComponent, BookComponent, StarListComponent]
})
export class SharedModule {}
