import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-listing',
  templateUrl: './game-listing.component.html',
  styleUrls: ['./game-listing.component.scss']
})
export class GameListingComponent implements OnInit {

    @Input('games') games: {};

  constructor() {
  }

  ngOnInit() {
  }

}
