import {Component, ViewChild} from '@angular/core';
import {TinySliderInstance, TinySliderSettings} from "tiny-slider";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  @ViewChild('tinySlider', { static: false }) tinySlider?: TinySliderInstance;
  // ADD THE SLIDER CONFIG HERE (show tiny slider documentation for more)

  public tinySliderConfig: TinySliderSettings = {
    autoWidth: true,
    "gutter": 2,
    "mouseDrag": true,
    "swipeAngle": false,
    "speed": 400,
    navContainer: false
  }

  public goTo(foo: number | 'next' | 'prev' | 'first' | 'last'): void {
    this.tinySlider?.goTo(foo);
  }
}
