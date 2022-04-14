import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable()
export class ErrorService {
  // eslint-disable-next-line class-methods-use-this
  handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
