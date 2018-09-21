import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { GameHeroComponent } from './components/game-detail/game-hero/game-hero.component';
import { EditionComparisonChartComponent } from './components/game-detail/edition-comparison-chart/edition-comparison-chart.component';
import { InnerPageLinksComponent } from './components/game-detail/inner-page-links/inner-page-links.component';
import { SynopsisBlockComponent } from './components/game-detail/synopsis-block/synopsis-block.component';
import { OverallBreakdownComponent } from './components/game-detail/overall-breakdown/overall-breakdown.component';
import { ConsoleExclusivesComponent } from './components/game-detail/console-exclusives/console-exclusives.component';
import { VendorExclusivesComponent } from './components/game-detail/vendor-exclusives/vendor-exclusives.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AppRoutingModule } from './/app-routing.module';
import { FeaturedReleasesComponent } from './components/landing-page/featured-releases/featured-releases.component';
import { SearchBarComponent } from './components/landing-page/search-bar/search-bar.component';
import { GameFiltersComponent } from './components/landing-page/game-filters/game-filters.component';
import { GameListingComponent } from './components/landing-page/game-listing/game-listing.component';
import { FeaturedGamesPipe } from './pipes/featured-games/featured-games.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GameDetailComponent,
    GameHeroComponent,
    EditionComparisonChartComponent,
    InnerPageLinksComponent,
    SynopsisBlockComponent,
    OverallBreakdownComponent,
    ConsoleExclusivesComponent,
    VendorExclusivesComponent,
    LandingPageComponent,
    FeaturedReleasesComponent,
    SearchBarComponent,
    GameFiltersComponent,
    GameListingComponent,
    FeaturedGamesPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
