import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchGamesListService {
    private game_list_url = 'http://gamecountdown.blakemcgillis.com/wp-json/wp/v2/game';

  constructor(
    private http: HttpClient
  ) { }

  getGamesList(): Observable<any>  {
    return this.http.get(this.game_list_url);
  }
}
