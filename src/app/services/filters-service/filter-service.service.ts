import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FiltersService {
  statusFilters$ = new Subject<boolean>();

  toggleFilter(show: boolean) {
    this.statusFilters$.next(show);
  }
}
