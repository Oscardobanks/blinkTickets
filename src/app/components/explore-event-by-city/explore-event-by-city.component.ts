import { Component } from '@angular/core';
import { cities, City } from 'src/app/data/city-card';

@Component({
  selector: 'app-explore-event-by-city',
  templateUrl: './explore-event-by-city.component.html',
  styleUrls: ['./explore-event-by-city.component.scss']
})
export class ExploreEventByCityComponent {
  cities: City[] = cities;
}
