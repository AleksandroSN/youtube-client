import { Injectable } from "@angular/core";
import { SortParamsWithDirection, ResponseModel, sorterHelper } from "@shared";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FiltersService {
  statusFilters$ = new Subject<boolean>();

  destroy$ = new Subject<boolean>();

  toggleFilter(show: boolean) {
    this.statusFilters$.next(show);
  }

  // eslint-disable-next-line class-methods-use-this
  sort(sortDir: SortParamsWithDirection, data: ResponseModel) {
    if (data) {
      const { items } = data;
      items.sort((a, b) => {
        const { x, y } = sorterHelper(a, b, sortDir);
        if (x < y) {
          return sortDir.direction === "ASC" ? -1 : 1;
        }
        if (x > y) {
          return sortDir.direction === "ASC" ? 1 : -1;
        }
        return 0;
      });
    }
  }
}
