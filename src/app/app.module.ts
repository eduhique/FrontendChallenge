import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { HomeModule } from './modules/home/home.module';
import { TournamentModule } from './modules/tournament/tournament.module';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, HomeModule, TournamentModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
