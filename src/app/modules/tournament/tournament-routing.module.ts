import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './../../core/not-found/not-found.component';
import { NewTournamentComponent } from './pages/new-tournament/new-tournament.component';
import { TournamentComponent } from './pages/tournament/tournament.component';

const routes: Routes = [
  { path: '', component: TournamentComponent },
  { path: 'new', component: NewTournamentComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TournamentRoutingModule {}
