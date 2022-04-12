import { environment } from "@environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError } from "rxjs";
import { ErrorService } from "../errors-hadler-service";

@Injectable()
export class HttpServiceService {
  private searchUrl = `https://www.googleapis.com/youtube/v3/search?key=${environment.YOUTUBE_API_KEY}&type=video&maxResults=15&q=`;

  private videosUrl = `https://www.googleapis.com/youtube/v3/videos?key=${environment.YOUTUBE_API_KEY}&part=snippet,statistics&id=`;

  constructor(private http: HttpClient, private errorService: ErrorService) {}

  get<T>(): Observable<T> {
    return this.http
      .get<T>(`${this.searchUrl}JS`)
      .pipe(catchError(this.errorService.handleError<T>()));
  }

  getByWord<T>(searchTerm: string): Observable<T> {
    return this.http
      .get<T>(`${this.searchUrl}${searchTerm}`)
      .pipe(catchError(this.errorService.handleError<T>()));
  }

  getVideosByIds<T>(ids: string): Observable<T> {
    return this.http
      .get<T>(`${this.videosUrl}${ids}`)
      .pipe(catchError(this.errorService.handleError<T>()));
  }
}
