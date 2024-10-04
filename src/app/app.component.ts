import { Component } from '@angular/core';
import { Slide, slides } from './data/hero-slide';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blinkTickets';
  slides: Slide[] = slides;
}
