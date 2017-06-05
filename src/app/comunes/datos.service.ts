import {Injectable} from '@angular/core';
import {Http, HttpModule} from '@angular/http';

@Injectable()
export class FriendService { 
  constructor(private http:Http) {
  }

  getFriends() {
    return this.http.request('./data/people.json').map(res => res.json());
  }
}