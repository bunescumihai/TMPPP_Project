import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistMinComponent } from './playlist-min.component';

describe('PlaylistMinComponent', () => {
  let component: PlaylistMinComponent;
  let fixture: ComponentFixture<PlaylistMinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaylistMinComponent]
    });
    fixture = TestBed.createComponent(PlaylistMinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
