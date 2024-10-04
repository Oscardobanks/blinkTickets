import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreEventCardsComponent } from './explore-event-cards.component';

describe('ExploreEventCardsComponent', () => {
  let component: ExploreEventCardsComponent;
  let fixture: ComponentFixture<ExploreEventCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExploreEventCardsComponent]
    });
    fixture = TestBed.createComponent(ExploreEventCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
