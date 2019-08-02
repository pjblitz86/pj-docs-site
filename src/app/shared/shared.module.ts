import { NgModule } from "@angular/core";
import { ModalComponent } from "./modal/modal.component";
import { CardComponent } from "./card/card.component";
import { BookComponent } from "./book/book.component";

@NgModule({
  declarations: [ModalComponent, CardComponent, BookComponent],
  exports: [ModalComponent, CardComponent, BookComponent]
})
export class SharedModule {}
