import { Component } from '@angular/core';
import { Tag, Trend, trends } from 'src/app/data/trending-card-detail';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss'],
})
export class TrendingComponent {
  trends: Trend[] = trends;
}
