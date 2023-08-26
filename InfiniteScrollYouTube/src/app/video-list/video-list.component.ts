import { Component, OnInit } from '@angular/core';
import { IVideo } from './video.model';
import { GetYouTubeInfoService } from './get-you-tube-info.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'], // Utiliza el archivo .scss para estilos
})
export class VideoListComponent implements OnInit {
  public videos: IVideo[] = [];
  public loading = false;

  private apiKey = 'AIzaSyBsJndbYMao8FHGjqwmVblcKKLamsk2Vu4';
  public query = 'futbol';
  public nextPageToken: string | null = '';

  constructor(private getYouTubeInfoService: GetYouTubeInfoService) {}

  ngOnInit() {
    this.loadVideos();
  }

  private loadVideos() {
    if (this.loading) return; // Evita múltiples cargas mientras se está cargando
    this.loading = true;
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${this.apiKey}&part=snippet&type=video&q=${this.query}&pageToken=${this.nextPageToken}&maxResults=20`;

    this.getYouTubeInfoService
      .getVideosInfo(apiUrl)
      .subscribe((response: any) => {
        this.videos = this.videos.concat(
          response.items.map((item: any) => ({
            id: item.id.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.medium.url,
          }))
        );
        this.nextPageToken = response.nextPageToken;
        this.loading = false;
      });
  }

  public onScroll() {
    this.loadVideos();
  }
}
