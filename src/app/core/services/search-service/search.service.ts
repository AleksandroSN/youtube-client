import { Injectable } from "@angular/core";
import { recieveSearchInput } from "@app/redux";
import { Store } from "@ngrx/store";
import { DEBOUNCE_TIME, MIN_LENGTH_CHARACTERS } from "@utils";
import { BehaviorSubject, debounceTime, filter } from "rxjs";

@Injectable()
export class SearchService {
  searchTerm$ = new BehaviorSubject<string>("");

  constructor(private store: Store) {
    this.subscibeToSearchTerm();
  }

  updateSearchTerm(str: string): void {
    this.searchTerm$.next(str);
  }

  subscibeToSearchTerm() {
    this.searchTerm$
      .pipe(
        filter((str) => str.length > MIN_LENGTH_CHARACTERS),
        debounceTime(DEBOUNCE_TIME),
      )
      .subscribe((searchStr) => this.store.dispatch(recieveSearchInput({ searchTerm: searchStr })));
  }
}
