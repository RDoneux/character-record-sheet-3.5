import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  readonly PREFIX: string = '3_5CS:'

  save<T>(key: string, value: T): void {
    localStorage.setItem(this.PREFIX + key, JSON.stringify(value));
  }

  load<T>(key: string): T | null {
    const item = localStorage.getItem(this.PREFIX + key);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  }
}
