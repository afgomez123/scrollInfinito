import { Component, Input } from '@angular/core';
import { IVideo } from '../video.model';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss']
})
export class VideoItemComponent {
  @Input()
  video!: IVideo;

}
