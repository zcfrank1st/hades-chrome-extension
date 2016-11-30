import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

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

  chromeSyncStore (object: {}) {
    chrome.storage.sync.set(object, () => {
      console.log("set [object]" + " : " + object);
    });
  }

  chromeSyncRetrieve(keyOfkeys: any) : Observable<any> {
    return Observable.from(new Promise<any> ((resolve) => {
      chrome.storage.sync.get(keyOfkeys, (objs) => {
        console.log("get [" + keyOfkeys + "]" + " : " + objs);
        resolve(objs);
      });
    }));
  }

  chromeSyncClear(keyOfkeys: any) {
    chrome.storage.sync.remove(keyOfkeys, () => {
      console.log("clear key " + keyOfkeys + " finished!");
    });
  }

  chromeSyncExists (keyOfkeys: Array<string>) : Observable<boolean>{
    return Observable.from(new Promise<boolean> ((resolve) => {
      chrome.storage.sync.get(keyOfkeys, (obj) => {
        if (this.isEmptyObject(obj)) {
          resolve(false);
        } else {
          resolve(Object.keys(obj).length === keyOfkeys.length);
        }
      });
    }));
  }

  private isEmptyObject(e: any) {
    let t;
    for (t in e)
        return !1;
    return !0;
  }

}
