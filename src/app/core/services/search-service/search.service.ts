import { Injectable } from "@angular/core";
import { DEBOUNCE_TIME, MIN_LENGTH_CHARACTERS } from "@utils";
import { BehaviorSubject, debounceTime, filter } from "rxjs";
import { CardsService } from "../cards-service";

@Injectable()
export class SearchService {
  searchTerm$ = new BehaviorSubject<string>("");

  constructor(private cardsService: CardsService) {
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
      .subscribe((searchStr) => this.cardsService.getCards(searchStr));
  }
}
