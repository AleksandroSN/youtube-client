import { Component, OnDestroy } from "@angular/core";
import { CardsService } from "@app/services";

@Component({
  selector: "app-search-filters",
  templateUrl: "./search-filters.component.html",
  styleUrls: ["./search-filters.component.scss"],
})
export class SorterComponent implements OnDestroy {
  searchData = "";

  sortByDateParam = "publishedAt";

  sortByViewCountParam = "viewCount";

  constructor(private cardService: CardsService) {}

  onChangeInput() {
    this.cardService.searchStr$.next(this.searchData);
  }

  ngOnDestroy(): void {
    this.cardService.destroy$.next(true);
    this.cardService.destroy$.complete();
  }
}
