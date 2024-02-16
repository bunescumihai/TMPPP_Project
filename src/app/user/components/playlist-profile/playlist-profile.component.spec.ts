import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistProfileComponent } from './playlist-profile.component';

describe('PlaylistProfileComponent', () => {
  let component: PlaylistProfileComponent;
  let fixture: ComponentFixture<PlaylistProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaylistProfileComponent]
    });
    fixture = TestBed.createComponent(PlaylistProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
