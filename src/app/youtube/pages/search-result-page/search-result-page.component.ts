import { Component, OnDestroy, OnInit } from "@angular/core";
import { CardsService } from "@app/core/services";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: "app-search-result-page",
  templateUrl: "./search-result-page.component.html",
  styleUrls: ["./search-result-page.component.scss"],
})
export class SearchResultPageComponent implements OnInit, OnDestroy {
  loader = true;

  destroy$ = new Subject<boolean>();

  constructor(private cardsService: CardsService) {}

  subscribeOnStatusLoad() {
    this.cardsService.isLoad$.pipe(takeUntil(this.destroy$)).subscribe((load) => {
      this.loader = load;
    });
  }

  ngOnInit(): void {
    this.subscribeOnStatusLoad();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
