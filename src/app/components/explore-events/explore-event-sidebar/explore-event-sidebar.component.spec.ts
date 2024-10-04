import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreEventSidebarComponent } from './explore-event-sidebar.component';

describe('ExploreEventSidebarComponent', () => {
  let component: ExploreEventSidebarComponent;
  let fixture: ComponentFixture<ExploreEventSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExploreEventSidebarComponent]
    });
    fixture = TestBed.createComponent(ExploreEventSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
