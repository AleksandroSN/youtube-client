import { Component } from "@angular/core";
import { FiltersService } from "@app/core/services";
import { SORT_BY_COUNT, SORT_BY_DATE } from "@utils";

@Component({
  selector: "app-search-filters",
  templateUrl: "./search-filters.component.html",
  styleUrls: ["./search-filters.component.scss"],
})
export class SearchFilterComponent {
  searchData = "";

  sortByDateParam = SORT_BY_DATE;

  sortByViewCountParam = SORT_BY_COUNT;

  constructor(private filtersService: FiltersService) {}

  onChangeInput() {
    this.filtersService.searchStr$.next(this.searchData);
  }
}
