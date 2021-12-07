import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  templateUrl: './new-tournament.component.html',
  styleUrls: ['./new-tournament.component.scss']
})
export class NewTournamentComponent implements OnInit {
  public formOfTeams: FormGroup;
  StringRef = String;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private titleService: Title
  ) {
    titleService.setTitle('New Tournament');
    this.formOfTeams = this.formBuilder.group({
      numberOfTeams: ['2', Validators.required],
      randomClashes: [false],
      teams: new FormArray([
        this.formBuilder.group({
          name: ['', Validators.required]
        }),
        this.formBuilder.group({
          name: ['', Validators.required]
        })
      ])
    });
  }

  ngOnInit(): void {
    const data = localStorage.getItem('tournament');
    if (data) {
      this.router.navigate(['tournament']);
    }
  }

  /* Return form */
  get form() {
    return this.formOfTeams.controls;
  }

  /* Return the teams */
  get teams(): FormArray {
    return this.formOfTeams.controls.teams as FormArray;
  }

  /* Return teams as a FormGroup */
  get teamsFormGroups(): Array<FormGroup> {
    return this.teams.controls as FormGroup[];
  }

  /* Dynamically change the form to match the number of teams selected. */
  onChangeTeams(event: Event) {
    const numberOfTeams = (event.target as HTMLInputElement).value || 0;
    if (this.teams.length < numberOfTeams) {
      for (let i = this.teams.length; i < numberOfTeams; i++) {
        this.teams.push(
          this.formBuilder.group({
            name: ['', Validators.required]
          })
        );
      }
    } else {
      for (let i = this.teams.length; i >= numberOfTeams; i--) {
        this.teams.removeAt(i);
      }
    }
  }

  /* Create a tournament upon receiving a valid form. */
  onSubmit() {
    // stop here if form is invalid
    if (this.formOfTeams.invalid) {
      return;
    }

    let teams = this.formOfTeams.value.teams;
    const tournament: Array<any> = [];
    if (this.formOfTeams.value.randomClashes) {
      teams = this.formOfTeams.value.teams.sort(() => 0.5 - Math.random());
    }

    for (
      let index = 0;
      index < this.getLogBase(this.teams.length, 2);
      index++
    ) {
      const round = [];
      if (index === 0) {
        for (let index2 = 0; index2 < teams.length; index2 += 2) {
          round.push({
            teams: [teams[index2], teams[index2 + 1]],
            winner: -1
          });
        }
      } else {
        for (
          let index2 = 0;
          index2 < teams.length / 2 ** (index + 1);
          index2++
        ) {
          round.push({
            teams: [],
            winner: -1
          });
        }
      }
      tournament.push(round);
    }

    localStorage.setItem('tournament', JSON.stringify(tournament));
    this.router.navigate(['tournament']);
  }

  /* Calculates the amount of rounds based on the number of teams. */
  private getLogBase(logarithm: number, base: number): number {
    return Math.log(logarithm) / Math.log(base);
  }
}
