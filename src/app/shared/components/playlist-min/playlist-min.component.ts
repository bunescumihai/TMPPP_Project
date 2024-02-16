import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-playlist-min',
  templateUrl: './playlist-min.component.html',
  styleUrls: ['./playlist-min.component.css']
})
export class PlaylistMinComponent {
  @Input() song: any = 1;
}
