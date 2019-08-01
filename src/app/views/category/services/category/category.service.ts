import { Injectable } from "@angular/core";
import { ACategoryService } from "./acategory.service";
import { Category } from "../../models/category.model";
import { JAVASCRIPT_DATA } from "../../models/data/javascript";

@Injectable({
  providedIn: "root"
})
export class CategoryService extends ACategoryService {
  public async getCategory(id: string): Promise<Category> {
    switch (id) {
      case "javascript":
        return JAVASCRIPT_DATA;
    }
  }
}
