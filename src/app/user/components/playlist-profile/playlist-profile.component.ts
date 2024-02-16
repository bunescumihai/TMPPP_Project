import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-playlist-profile',
  templateUrl: './playlist-profile.component.html',
  styleUrls: ['./playlist-profile.component.css']
})
export class PlaylistProfileComponent {
  @Input() song: any = 1;
}
