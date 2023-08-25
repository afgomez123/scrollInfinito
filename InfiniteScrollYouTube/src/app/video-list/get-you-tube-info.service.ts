import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetYouTubeInfoService {
  constructor(private http: HttpClient) {}

  public getVideosInfo(apiUrl: string): Observable<any> {
    return this.http.get(apiUrl).pipe(tap((info) => console.log(info)));
  }
}
