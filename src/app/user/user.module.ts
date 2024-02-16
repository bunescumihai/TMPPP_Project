import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './pages/profile/profile.component';
import {UserRoutingModule} from "./user-routing.module";
import { PlaylistsComponent } from './pages/playlists/playlists.component';
import {NgxTranslateModule} from "../translate/translate.module";
import {SharedModule} from "../shared/shared.module";
import {PlaylistProfileComponent} from "./components/playlist-profile/playlist-profile.component";
import { InfoComponent } from './pages/info/info.component';



@NgModule({
  declarations: [
    ProfileComponent,
    PlaylistsComponent,
    PlaylistProfileComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgxTranslateModule,
    SharedModule
  ]
})
export class UserModule { }
