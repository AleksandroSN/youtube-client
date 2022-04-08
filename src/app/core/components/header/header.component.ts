import { Component, OnDestroy, OnInit } from "@angular/core";
import { FiltersService, LoginService } from "@app/core/services";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit, OnDestroy {
  showFilters = false;

  isAuth = false;

  destroy$ = new Subject<boolean>();

  constructor(private filtersService: FiltersService, private loginService: LoginService) {}

  ngOnInit(): void {
    this.showFilter();
    this.subscribeOnAuth();
  }

  showFilter() {
    this.filtersService.statusFilters$.pipe(takeUntil(this.destroy$)).subscribe((status) => {
      this.showFilters = status;
    });
  }

  subscribeOnAuth() {
    this.loginService.user$.pipe(takeUntil(this.destroy$)).subscribe((userStatus) => {
      this.isAuth = !!userStatus;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
