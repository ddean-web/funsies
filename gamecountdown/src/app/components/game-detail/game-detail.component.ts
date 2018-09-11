import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { FetchGameDetailService } from '../../services/fetch-game-detail/fetch-game-detail.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  game_data: {};

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private getGameDataService: FetchGameDetailService,
  ) { }

  ngOnInit() {
    this.getGameData();
  }

  getGameData() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getGameDataService.getGameData(id)
      .subscribe( data => this.game_data = data);
  }

}
