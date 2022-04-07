import { Component } from "@angular/core";
import { FiltersService } from "@app/core/services";

@Component({
  selector: "app-search-filters",
  templateUrl: "./search-filters.component.html",
  styleUrls: ["./search-filters.component.scss"],
})
export class SearchFilterComponent {
  searchData = "";

  sortByDateParam = "publishedAt";

  sortByViewCountParam = "viewCount";

  constructor(private filtersService: FiltersService) {}

  onChangeInput() {
    this.filtersService.searchStr$.next(this.searchData);
  }
}
