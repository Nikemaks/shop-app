import { Injectable } from '@angular/core';

export const SHOP_ITEMS = 'SHOP_ITEMS';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
  }

  setStorage(key: string, value: any): void {
    const json = JSON.stringify(value);
    localStorage.setItem(key, json);
  }

  getStorageItem(key: string) {
    return JSON.parse(<string>localStorage.getItem(key));
  }

  removeStorage(key: string) {
    localStorage.removeItem(key);
  }
}
