import { Component } from "@angular/core";
import { FiltersService } from "@app/core/services";

@Component({
  selector: "app-search-filter",
  templateUrl: "./search-filter.component.html",
  styleUrls: ["./search-filter.component.scss"],
})
export class SearchFilterBtnComponent {
  isShow = false;

  constructor(private filtersService: FiltersService) {}

  onClick() {
    this.isShow = !this.isShow;
    this.filtersService.toggleFilter(this.isShow);
  }
}
