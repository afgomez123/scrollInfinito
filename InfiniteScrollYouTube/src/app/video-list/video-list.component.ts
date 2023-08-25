import { Component, OnInit } from '@angular/core';
import { IVideo } from './video.model';
import { GetYouTubeInfoService } from './get-you-tube-info.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'], // Utiliza el archivo .scss para estilos
})
export class VideoListComponent implements OnInit {
  videos: IVideo[] = [];
  nextPageToken: string | null = null;
  loading = false;

  constructor(private getYouTubeInfoService: GetYouTubeInfoService) {}

  ngOnInit() {
    this.loadVideos();
  }

  private loadVideos() {
    if (this.loading) return; // Evita múltiples cargas mientras se está cargando

    this.loading = true;
    const apiKey = 'AIzaSyBg9s2am-Ue8yB1FEd6XUf28rxp2IJSZpo';
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&type=video&q=hola`;

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
        console.log(' this.nextPageToken', this.nextPageToken);
        this.loading = false;
      });
  }

  public onScroll() {
    this.loadVideos();
  }
}
