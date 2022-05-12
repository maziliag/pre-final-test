import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'pre-final-test';
  miestai: string[] = [
    'Vilnius',
    'Kaunas',
    'Klaipeda',
    'Siauliai',
    'Panevezys',
  ];
}
