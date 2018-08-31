import { Component, OnInit } from '@angular/core';
import { GameDetail } from '../../models/game_detail';
import { FetchGameDetailService } from '../../services/fetch-game-detail.service';

// COMPONENTS
import { GameHeroComponent } from './game-hero/game-hero.component';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {
    game_data: {}

  constructor(private getGameDataService: FetchGameDetailService) {
  }

  ngOnInit() {
      this.getGameData();
  }

  getGameData(){
      this.getGameDataService.getGameData().subscribe( data => this.game_data = data);
  }

}
