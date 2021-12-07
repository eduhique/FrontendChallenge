import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { TournamentService } from './../../../tournament.service';

@Component({
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss'],
  providers: [TournamentService]
})
export class TournamentComponent implements OnInit, OnDestroy {
  public tournament: any;

  constructor(private router: Router, private titleService: Title) {
    titleService.setTitle('New Tournament');
    this.tournament = [];
  }

  ngOnInit(): void {
    const data = localStorage.getItem('tournament');
    if (!data) {
      this.router.navigate(['tournament/new']);
    } else {
      this.tournament = JSON.parse(data);
      if (this.tournament[this.tournament.length - 1][0].winner !== -1) {
        this.tournament = [];
        this.router.navigate(['tournament/new']);
      }
    }
  }

  ngOnDestroy(): void {
    const data = localStorage.getItem('tournament');
    if (!data) {
      this.router.navigate(['tournament/new']);
    } else if (this.tournament.length > 0) {
      localStorage.setItem('tournament', JSON.stringify(this.tournament));
    } else {
      localStorage.removeItem('tournament');
    }
  }

  /* defines the winner of a given game */
  setWinner(value: any) {
    this.tournament[value.round][value.match].winner = value.winner;
    const team = this.tournament[value.round][value.match].teams[value.winner];

    if (value.round < this.tournament.length - 1) {
      this.tournament[value.round + 1][Math.floor(value.match / 2)].teams.push(
        team
      );
    }
    localStorage.setItem('tournament', JSON.stringify(this.tournament));
  }

  /* Calculates the amount of rounds based on the number of teams. */
  getLogBase(logarithm: number, base: number): number {
    return Math.log(logarithm) / Math.log(base);
  }
}
