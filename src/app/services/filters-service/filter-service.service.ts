import { Injectable } from "@angular/core";
import { SortParamsWithDirection, ResponseModel } from "@shared";
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
        let x = 0;
        let y = 0;
        if (sortDir.params === "publishedAt") {
          const xTime = new Date(a.snippet[sortDir.params]).getTime();
          const yTime = new Date(b.snippet[sortDir.params]).getTime();
          x = xTime;
          y = yTime;
        } else if (sortDir.params === "viewCount") {
          x = +a.statistics[sortDir.params];
          y = +b.statistics[sortDir.params];
        }
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
