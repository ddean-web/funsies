import { Component, OnInit } from '@angular/core';
import { FetchGamesListService } from '../../../services/games-listing/games-listing.service';

@Component({
  selector: 'app-game-listing',
  templateUrl: './game-listing.component.html',
  styleUrls: ['./game-listing.component.scss']
})
export class GameListingComponent implements OnInit {

  games_list: {}

  constructor(private fetchGamesListService: FetchGamesListService) {
  }

  ngOnInit() {
    this.getGamesList();
  }

  getGamesList(){
    this.fetchGamesListService.getGamesList().subscribe( data => this.games_list = data);
    // console.log( games_list );
  }

}
