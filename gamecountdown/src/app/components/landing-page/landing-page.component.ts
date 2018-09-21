import { Component, OnInit } from '@angular/core';
import { FetchGamesListService } from '../../services/games-listing/games-listing.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
    games: {};

  constructor(
      private fetchGamesListService: FetchGamesListService
  ) { }

  ngOnInit() {
      this.getGamesList();
  }

  getGamesList(){
    this.fetchGamesListService.getGamesList().subscribe( data => this.games = data);
    // console.log( games_list );
  }

}
