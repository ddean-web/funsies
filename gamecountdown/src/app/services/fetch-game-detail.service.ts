import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchGameDetailService {
    private game_detail_url = 'http://gamecountdown.blakemcgillis.com/wp-json/wp/v2/game/59';  // URL to web api


  constructor(
      private http: HttpClient,
  ) { }
  getGameData(): Observable<any> {
      // var stuff = this.http.get(this.game_detail_url);
      // console.log(stuff);
      return this.http.get(this.game_detail_url)
  }
}
