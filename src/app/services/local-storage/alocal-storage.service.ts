export abstract class ALocalStorageService {
  abstract getItem(key: string): string;
  abstract setItem(key: string, value: string): void;
}
