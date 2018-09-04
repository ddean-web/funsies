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

  getGameData(id: number): Observable<any> {
      return this.http.get('http://gamecountdown.blakemcgillis.com/wp-json/wp/v2/game/' + id);
  }
}
