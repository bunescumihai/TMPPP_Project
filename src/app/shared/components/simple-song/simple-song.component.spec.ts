import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleSongComponent } from './simple-song.component';

describe('SimpleSongComponent', () => {
  let component: SimpleSongComponent;
  let fixture: ComponentFixture<SimpleSongComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleSongComponent]
    });
    fixture = TestBed.createComponent(SimpleSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
