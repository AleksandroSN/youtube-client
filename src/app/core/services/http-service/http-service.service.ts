import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CHUNK_SEARCH_URL, CHUNK_VIDEO_URL } from "@utils";
import { Observable, catchError } from "rxjs";
import { ErrorService } from "../errors-hadler-service";

@Injectable()
export class HttpServiceService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  get<T>(): Observable<T> {
    return this.http
      .get<T>(`${CHUNK_SEARCH_URL}Angular`)
      .pipe(catchError(this.errorService.handleError<T>()));
  }

  getByWord<T>(searchTerm: string): Observable<T> {
    return this.http
      .get<T>(`${CHUNK_SEARCH_URL}${searchTerm}`)
      .pipe(catchError(this.errorService.handleError<T>()));
  }

  getVideosByIds<T>(ids: string): Observable<T> {
    return this.http
      .get<T>(`${CHUNK_VIDEO_URL}${ids}`)
      .pipe(catchError(this.errorService.handleError<T>()));
  }
}
