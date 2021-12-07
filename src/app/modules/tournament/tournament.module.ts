import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './../../core/header/header.component';
import { MatchTreeComponent } from './components/match-tree/match-tree.component';
import { MatchComponent } from './components/match/match.component';
import { NewTournamentComponent } from './pages/new-tournament/new-tournament.component';
import { TournamentComponent } from './pages/tournament/tournament.component';
import { TournamentRoutingModule } from './tournament-routing.module';

@NgModule({
  declarations: [
    TournamentComponent,
    NewTournamentComponent,
    MatchTreeComponent,
    MatchComponent,
    HeaderComponent
  ],
  imports: [CommonModule, TournamentRoutingModule, ReactiveFormsModule]
})
export class TournamentModule {}
