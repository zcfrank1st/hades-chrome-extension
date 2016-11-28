import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Message } from './message';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RestfulService {
  private restfulUrl = 'http://localhost:8080';  //TODO URL to web API

  constructor (private http: Http) {}

  existsProject (projectName: string, projectPath: string, token: string, username: string): Observable<Message> {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'token': token,
      'projectpath' : projectPath,
      'username': username
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.restfulUrl + "/config/" + projectName, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  initProjectSkeleton (projectName: string, projectPath: string, token: string, username: string): Observable<Message> {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'token': token,
      'projectpath' : projectPath,
      'username': username
    });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.restfulUrl + "/config/skeleton", projectName, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }


  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
