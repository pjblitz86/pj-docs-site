import { NgModule } from "@angular/core";
import { ModalComponent } from "./modal/modal.component";
import { CardComponent } from "./card/card.component";
import { BookComponent } from "./book/book.component";
import { CommonModule } from "@angular/common";
import { StarListComponent } from "./star-list/star-list.component";
import { AlertComponent } from "./alert/alert.component";

@NgModule({
  imports: [CommonModule],
  declarations: [
    ModalComponent,
    CardComponent,
    BookComponent,
    StarListComponent,
    AlertComponent
  ],
  exports: [
    ModalComponent,
    CardComponent,
    BookComponent,
    StarListComponent,
    AlertComponent
  ]
})
export class SharedModule {}
