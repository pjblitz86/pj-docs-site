import { CoursesComponent } from "./courses.component";

describe("Courses Component", () => {
  it("Exist", () => {
    // assert
    expect(CoursesComponent).toBeDefined();
  });
  it("Can be built", () => {
    //act
    const component = new CoursesComponent();
    // assert
    expect(component instanceof CoursesComponent).toBe(true);
  });
});
