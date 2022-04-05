import { Component, OnDestroy, OnInit } from "@angular/core";
import { CardsService, FiltersService } from "@app/core/services";
import { ResponseModel, SortParamsWithDirection } from "@app/shared";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: "app-search-result",
  templateUrl: "./search-result.component.html",
  styleUrls: ["./search-result.component.scss"],
})
export class SearchResultComponent implements OnInit, OnDestroy {
  cards?: ResponseModel;

  searchStr: string = "";

  sortBy: SortParamsWithDirection | null = null;

  destroy$ = new Subject<boolean>();

  constructor(
    private filtersService: FiltersService,
    private cardService: CardsService,
  ) {}

  ngOnInit(): void {
    this.subscribeToSearchStr();
    this.subscribeToSort();
    this.subscribeToCards();
  }

  subscribeToSort() {
    this.filtersService.sortBy$
      .pipe(takeUntil(this.destroy$))
      .subscribe((sortData) => {
        this.sortBy = sortData;
      });
  }

  subscribeToSearchStr() {
    this.filtersService.searchStr$
      .pipe(takeUntil(this.destroy$))
      .subscribe((str) => {
        this.searchStr = str;
      });
  }

  subscribeToCards() {
    this.cardService.data$.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.cards = data;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
