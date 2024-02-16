import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { NgxWrapperTinySliderModule } from 'ngx-wrapper-tiny-slider';
import { SimpleSongComponent } from './components/simple-song/simple-song.component';
import { PlaylistMinComponent } from './components/playlist-min/playlist-min.component';
import {NgxTranslateModule} from "../translate/translate.module";
import { BigCardComponent } from './components/big-card/big-card.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import {SharedRoutingModule} from "./shared-routing.module";
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { RegistrationComponent } from './pages/registration/registration.component';


@NgModule({
  declarations: [
    SliderComponent,
    SimpleSongComponent,
    PlaylistMinComponent,
    BigCardComponent,
    PlaylistComponent
  ],
  exports: [
    SliderComponent,
    SimpleSongComponent,
    PlaylistMinComponent,
    BigCardComponent
  ],
  imports: [
    CommonModule,
    NgxWrapperTinySliderModule,
    NgxTranslateModule,
    SharedRoutingModule,
    DragDropModule
  ]
})
export class SharedModule { }
