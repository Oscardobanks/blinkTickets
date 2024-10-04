import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreEventByCityComponent } from './explore-event-by-city.component';

describe('ExploreEventByCityComponent', () => {
  let component: ExploreEventByCityComponent;
  let fixture: ComponentFixture<ExploreEventByCityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExploreEventByCityComponent]
    });
    fixture = TestBed.createComponent(ExploreEventByCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
