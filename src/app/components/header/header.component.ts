import { Component, OnDestroy, OnInit } from "@angular/core";
import { FiltersService } from "@app/services";
import { takeUntil } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit, OnDestroy {
  showFilters = false;

  constructor(private filtersService: FiltersService) {}

  ngOnInit(): void {
    this.showFilter();
  }

  ngOnDestroy(): void {
    this.filtersService.destroy$.next(true);
    this.filtersService.destroy$.complete();
  }

  showFilter() {
    this.filtersService.statusFilters$
      .pipe(takeUntil(this.filtersService.destroy$))
      .subscribe((status) => {
        this.showFilters = status;
      });
  }
}
