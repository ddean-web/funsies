import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
    { path: '', component: LandingPageComponent },
  { path: 'game-detail', component: GameDetailComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
