import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-featured-releases',
  templateUrl: './featured-releases.component.html',
  styleUrls: ['./featured-releases.component.scss']
})
export class FeaturedReleasesComponent implements OnInit {

    @Input('games') games: {};

  constructor() {
  }

  ngOnInit() {
  }
}
