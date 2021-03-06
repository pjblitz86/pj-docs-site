import { NgModule } from "@angular/core";
import { ModalComponent } from "./modal/modal.component";
import { CardComponent } from "./card/card.component";
import { BookComponent } from "./book/book.component";
import { CommonModule } from "@angular/common";
import { StarListComponent } from "./star-list/star-list.component";
import { ALocalStorageService } from "../services/local-storage/alocal-storage.service";
import { LocalStorage } from "../services/local-storage/local-storage.service";
import { AlertComponent } from "./alert/alert.component";
import { CoursesComponent } from "./courses/courses.component";

@NgModule({
  imports: [CommonModule],
  declarations: [
    ModalComponent,
    CardComponent,
    BookComponent,
    StarListComponent,
    AlertComponent,
    CoursesComponent
  ],
  providers: [{ provide: ALocalStorageService, useClass: LocalStorage }],
  exports: [
    ModalComponent,
    CardComponent,
    BookComponent,
    StarListComponent,
    AlertComponent,
    CoursesComponent
  ]
})
export class SharedModule {}
