import { Injectable } from "@angular/core";
import { ALocalStorageService } from "./alocal-storage.service";

@Injectable({
  providedIn: "root"
})
export class LocalStorage extends ALocalStorageService {
  public getItem(key: string): string {
    return localStorage.getItem(key);
  }

  public setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
}
