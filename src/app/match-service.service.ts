import { Injectable } from '@angular/core';

import { Match } from './app.component';
import {Observable} from "rxjs";
import {Response, Http} from "@angular/http";

@Injectable()
export class MatchService {

  private matchesUrl = 'http://127.0.0.1:8000/api/matches/?home_team=Manchester+United';  // URL to web API

  constructor (private http: Http) {}

  getMatches (): Observable<Match[]> {
    return this.http.get(this.matchesUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.results || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
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
