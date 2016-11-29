import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService {
  private username = window.localStorage.getItem("USER-NAME");
  private pattern;

  constructor() {
    this.pattern = new RegExp("(http|https)://.*" +"/(.*)/(\\w+)/?.*");
  }

  isProjectPage (path: string) {
    return this.pattern.test(path);
  }

  projectName (path: string) {
    return path.match(this.pattern)[3];
  }

  projectPath (path: string) {
    return path.match(this.pattern)[2] + "/" + path.match(this.pattern)[3];
  }

  currentUrl () {
    return new Promise<string> ((resolve) => {
      chrome.tabs.query({active: true}, (tabs) => {
        resolve(tabs[0].url);
      });
    });
  }
}
