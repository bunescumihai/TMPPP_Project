import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-simple-song',
  templateUrl: './simple-song.component.html',
  styleUrls: ['./simple-song.component.css']
})
export class SimpleSongComponent {
  @Input() song: any;
}
