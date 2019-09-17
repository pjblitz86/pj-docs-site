import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ACategoryService } from "src/app/services/category/acategory.service";
import { Category } from "src/app/models/category.model";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"]
})
export class CategoryComponent implements OnInit {
  public category: Category = new Category();
  public resourceList = ["books", "courses"];

  constructor(
    private route: ActivatedRoute,
    private categoryService: ACategoryService
  ) {}

  public ngOnInit(): void {
    this.updateCategoryData();
  }

  private updateCategoryData(): void {
    this.route.params.subscribe(async params => {
      const { id } = params;
      this.category = await this.categoryService.getCategory(id);
    });
  }
}
