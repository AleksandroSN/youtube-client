import { Component, OnDestroy, OnInit } from "@angular/core";
import { FiltersService } from "@app/core/services";
import { selectCustomCards, selectYoutubeCards } from "@app/redux";
import { ResponseVideoItemModel, SortParamsWithDirection } from "@app/shared";
import { Store } from "@ngrx/store";
import { Observable, Subject, takeUntil } from "rxjs";

@Component({
  selector: "app-search-result",
  templateUrl: "./search-result.component.html",
  styleUrls: ["./search-result.component.scss"],
})
export class SearchResultComponent implements OnInit, OnDestroy {
  cards$?: Observable<ResponseVideoItemModel[]>;

  customCards$?: Observable<ResponseVideoItemModel[]>;

  searchStr: string = "";

  sortBy: SortParamsWithDirection | null = null;

  destroy$ = new Subject<boolean>();

  constructor(private filtersService: FiltersService, private store: Store) {
    this.customCards$ = this.store.select(selectCustomCards);
    this.cards$ = this.store.select(selectYoutubeCards);
  }

  ngOnInit(): void {
    this.subscribeToSearchStr();
    this.subscribeToSort();
  }

  subscribeToSort() {
    this.filtersService.sortBy$.pipe(takeUntil(this.destroy$)).subscribe((sortData) => {
      this.sortBy = sortData;
    });
  }

  subscribeToSearchStr() {
    this.filtersService.searchStr$.pipe(takeUntil(this.destroy$)).subscribe((str) => {
      this.searchStr = str;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
