import { Component } from '@angular/core';
import { Trend, trends } from 'src/app/data/trending-card-detail';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss'],
})
export class PopularComponent {
  trends: Trend[] = trends;
}
