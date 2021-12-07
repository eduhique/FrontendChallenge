import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-match-tree',
  templateUrl: './match-tree.component.html',
  styleUrls: ['./match-tree.component.scss']
})
export class MatchTreeComponent {
  @Input()
  public tournament: any;

  @Output()
  public sendWinner: EventEmitter<{
    winner: number;
    round: number;
    match: number;
  }>;

  constructor() {
    this.sendWinner = new EventEmitter<{
      winner: number;
      round: number;
      match: number;
    }>();
  }

  /* defines the winner of a given game */
  setWinner(winner: number, round: number, match: number) {
    this.sendWinner.emit({ winner, round, match });
  }
}
