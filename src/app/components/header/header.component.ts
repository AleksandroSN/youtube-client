import { Component, OnInit } from "@angular/core";
import { FiltersService } from "@app/services";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  showFilters = false;

  constructor(private filtersService: FiltersService) {}

  ngOnInit(): void {
    this.showFilter();
  }

  showFilter() {
    this.filtersService.statusFilters$.subscribe((status) => {
      this.showFilters = status;
    });
  }
}
