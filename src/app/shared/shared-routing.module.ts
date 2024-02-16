import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlaylistComponent} from "./pages/playlist/playlist.component";
import {AuthenticationComponent} from "./pages/authentication/authentication.component";
import {RegistrationComponent} from "./pages/registration/registration.component";

const routes: Routes = [
  {path: 'playlist', component: PlaylistComponent},
  {path: 'authentication', component: AuthenticationComponent},
  {path: 'registration', component: RegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SharedRoutingModule { }
