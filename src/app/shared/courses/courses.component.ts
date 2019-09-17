import { Component, Input } from "@angular/core";
import { Course } from "src/app/models/course.model";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.scss"]
})
export class CoursesComponent {
  @Input() public courses: Course[] = [
    new Course({
      title: "100 algorithm challenge",
      author: "Paul Jukman",
      time: "10h",
      authorImage:
        "http://www.sunwaychessfestival.com/imagenes/perfil/12802247.jpg"
    }),
    new Course({
      title: "100 algo challenge",
      author: "Paul Jukman",
      time: "10h",
      authorImage:
        "http://www.sunwaychessfestival.com/imagenes/perfil/12802247.jpg"
    }),
    new Course({
      title: "100 algo challenge",
      author: "Paul Jukman",
      time: "10h",
      authorImage:
        "http://www.sunwaychessfestival.com/imagenes/perfil/12802247.jpg"
    })
  ];
}
