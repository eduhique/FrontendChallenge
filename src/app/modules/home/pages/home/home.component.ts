import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router, private titleService: Title) {
    titleService.setTitle('Home');
  }

  public tournamentStart(): void {
    this.router.navigate(['tournament']);
  }
}
