import { Component } from '@angular/core';
import { Event, events } from 'src/app/data/event-card-detail';

@Component({
  selector: 'app-explore-event-cards',
  templateUrl: './explore-event-cards.component.html',
  styleUrls: ['./explore-event-cards.component.scss'],
})
export class ExploreEventCardsComponent {
  events: Event[] = events;
}
