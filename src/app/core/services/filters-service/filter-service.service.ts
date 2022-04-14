import { Injectable } from "@angular/core";
import { SortParamsWithDirection } from "@app/shared";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable()
export class FiltersService {
  sortBy$ = new BehaviorSubject<SortParamsWithDirection | null>(null);

  searchStr$ = new BehaviorSubject<string>("");

  statusFilters$ = new Subject<boolean>();

  toggleFilter(show: boolean) {
    this.statusFilters$.next(show);
  }
}
