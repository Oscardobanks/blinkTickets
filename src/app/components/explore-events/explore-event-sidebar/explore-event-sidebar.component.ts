import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-explore-event-sidebar',
  templateUrl: './explore-event-sidebar.component.html',
  styleUrls: ['./explore-event-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExploreEventSidebarComponent {
 categories: string[] = [
  'Music',
  'Parties',
  'Meetups',
  'Conference',
  'Treking/Hiking',
  'Adventure',
  'Comedy',
  'Traditional/ethnic',
  'Performing/Visual Arts',
  'Food & Drinks',
 ]
}
