import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent {
  @Input()
  public match: any;

  @Input()
  public winner: number;

  @Output()
  public setWinner: EventEmitter<number>;

  constructor() {
    this.winner = -1;
    this.setWinner = new EventEmitter<number>();
  }

  /* defines the winner of a given game */
  isWinner(value: number) {
    this.setWinner.emit(value);
  }
}
