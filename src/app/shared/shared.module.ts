import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { NgxWrapperTinySliderModule } from 'ngx-wrapper-tiny-slider';
import { SimpleSongComponent } from './components/simple-song/simple-song.component';
@NgModule({
  declarations: [
    SliderComponent,
    SimpleSongComponent,
  ],
  exports: [
    SliderComponent,
    SimpleSongComponent
  ],
  imports: [
    CommonModule,
    NgxWrapperTinySliderModule
  ]
})
export class SharedModule { }
