import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class FeedService {

  constructor(private http: Http) { }

  public getFeed() {
    this.http.get('http://localhost:8000/get').subscribe(res => res.json());
  }

}
