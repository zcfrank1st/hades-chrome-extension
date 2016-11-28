import { Injectable } from '@angular/core';

@Injectable()
export class StatusService {
  constructor() { }

  store (key: string, value: string) {
    window.localStorage.setItem(key, value);
  }

  retrieve (key: string) {
    return window.localStorage.getItem(key);
  }

  clear (key: string) {
    window.localStorage.removeItem(key);
  }

  exists (key: string) {
    if (window.localStorage.getItem(key) === null) {
      return false;
    } else {
      return true;
    }
  }
}
