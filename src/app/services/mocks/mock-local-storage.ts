import { ALocalStorageService } from "../local-storage/alocal-storage.service";

export class MockLocalStorageService extends ALocalStorageService {
  public storage = {};

  public getItem(key: string): string {
    return this.storage[key];
  }

  public setItem(key: string, value: string): void {
    this.storage[key] = value;
  }
}
