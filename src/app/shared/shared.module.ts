import { NgModule } from "@angular/core";
import { ModalComponent } from "./modal/modal.component";
import { CardComponent } from "./card/card.component";

@NgModule({
  declarations: [ModalComponent, CardComponent],
  exports: [ModalComponent, CardComponent]
})
export class SharedModule {}
