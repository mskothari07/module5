import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  dateToday = Date.now();
  amount = '120000';
  text = "Hey I'm Meet, currently learning Angular";
}
