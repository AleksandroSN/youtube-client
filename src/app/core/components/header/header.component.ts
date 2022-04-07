import { Component, OnDestroy, OnInit } from "@angular/core";
import { FiltersService } from "@app/core/services";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit, OnDestroy {
  showFilters = false;

  destroy$ = new Subject<boolean>();

  constructor(private filtersService: FiltersService) {}

  ngOnInit(): void {
    this.showFilter();
  }

  showFilter() {
    this.filtersService.statusFilters$
      .pipe(takeUntil(this.destroy$))
      .subscribe((status) => {
        this.showFilters = status;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
