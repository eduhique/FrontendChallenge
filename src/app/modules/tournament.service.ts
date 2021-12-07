import { Injectable } from '@angular/core';
import { Observable, Subject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  private _teams: Subject<Array<{ name: string }>> = new ReplaySubject<
    Array<{ name: string }>
  >();

  public getTeams(): Observable<Array<{ name: string }>> {
    return this._teams.asObservable();
  }

  public teamsCreated(teams: Array<{ name: string }>): void {
    this._teams.next(teams);
  }
}
