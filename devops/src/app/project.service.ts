import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService {
  private pattern;

  constructor() {
    this.pattern = new RegExp("(http|https)://[^\\/]*/([^\\/]*)/([^\\/]*)/?.*");
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
