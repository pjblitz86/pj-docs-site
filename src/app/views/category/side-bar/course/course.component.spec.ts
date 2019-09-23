import { CourseComponent } from "./course.component";

describe("Course Component", () => {
  it("Exist", () => {
    // assert
    expect(CourseComponent).toBeDefined();
  });
  it("Can be built", () => {
    //act
    const component = new CourseComponent();
    // assert
    expect(component instanceof CourseComponent).toBe(true);
  });
});
