import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from "./pages/profile/profile.component";
import {PlaylistsComponent} from "./pages/playlists/playlists.component";
import {InfoComponent} from "./pages/info/info.component";

const routes: Routes = [
  {
    path: 'me', component: ProfileComponent, children: [
      {path: 'playlists', component: PlaylistsComponent},
      {path: '', component: InfoComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
