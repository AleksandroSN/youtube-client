import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError } from "rxjs";
import { ErrorService } from "../errors-hadler-service";

@Injectable({
  providedIn: "root",
})
export class HttpServiceService {
  private url = "assets/response.json";

  constructor(private http: HttpClient, private errorService: ErrorService) {}

  get<T>(): Observable<T> {
    return this.http
      .get<T>(this.url)
      .pipe(catchError(this.errorService.handleError<T>()));
  }
}
