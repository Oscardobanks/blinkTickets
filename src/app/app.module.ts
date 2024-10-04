import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { EventCardsComponent } from './components/event-cards/event-cards.component';
import { TrendingComponent } from './components/trending/trending.component';
import { SpotlightComponent } from './components/spotlight/spotlight.component';
import { ExploreEventsComponent } from './components/explore-events/explore-events.component';
import { PopularComponent } from './components/popular/popular.component';
import { ExploreEventByCityComponent } from './components/explore-event-by-city/explore-event-by-city.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { ExploreEventCardsComponent } from './components/explore-events/explore-event-cards/explore-event-cards.component';
import { ExploreEventSidebarComponent } from './components/explore-events/explore-event-sidebar/explore-event-sidebar.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BannerComponent } from './components/banner/banner.component';
import {MatIconModule} from '@angular/material/icon';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    EventCardsComponent,
    TrendingComponent,
    SpotlightComponent,
    ExploreEventsComponent,
    PopularComponent,
    ExploreEventByCityComponent,
    ExploreEventCardsComponent,
    ExploreEventSidebarComponent,
    BannerComponent,
    ScrollToTopComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
