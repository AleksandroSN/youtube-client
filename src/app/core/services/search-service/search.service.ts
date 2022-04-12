import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class SearchService {
  searchTerm$ = new BehaviorSubject<string>("");

  updateSearchTerm(str: string): void {
    this.searchTerm$.next(str);
  }
}
