import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  /* remove data from local storage */
  resetTournament() {
    localStorage.removeItem('tournament');
  }
}
