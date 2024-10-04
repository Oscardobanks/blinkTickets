import { Component } from '@angular/core';
import { Genre, genres } from 'src/app/data/genre-detail';

@Component({
  selector: 'app-event-cards',
  templateUrl: './event-cards.component.html',
  styleUrls: ['./event-cards.component.scss'],
})
export class EventCardsComponent {
  genres: Genre[] = genres;
}
