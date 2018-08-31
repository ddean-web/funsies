import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-hero',
  templateUrl: './game-hero.component.html',
  styleUrls: ['./game-hero.component.scss']
})
export class GameHeroComponent implements OnInit {
    @Input('title') title: string;
    retailer_links = [
        {
            name: 'Amazon',
            link: 'http://amazon.com'
        },
        {
            name: 'Best Buy',
            link: 'http://amazon.com'
        }
    ]

  constructor() {
  }

  ngOnInit() {
  }

}
