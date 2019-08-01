import { Injectable } from "@angular/core";
import { ACategoryService } from "./acategory.service";
import { Category } from "../../models/category.model";

@Injectable({
  providedIn: "root"
})
export class MockCategoryService extends ACategoryService {
  public lastCategoryId: string = "";
  public getCategory(id: string): any {
    this.lastCategoryId = id;
    return new Category({ id });
  }
}
