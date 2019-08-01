import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ACategoryService } from "./services/category/acategory.service";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"]
})
export class CategoryComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private categoryService: ACategoryService
  ) {}

  public async ngOnInit(): Promise<void> {
    this.route.params.subscribe(params => {
      console.log(params);
    });
  }
}
