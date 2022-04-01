import { Injectable } from "@angular/core";
import {
  ResponseItemModel,
  ResponseModel,
  SortParamsWithDirection,
} from "@shared";
import { BehaviorSubject, Subject, takeUntil } from "rxjs";
import { HttpServiceService } from "../http-service";

@Injectable({
  providedIn: "root",
})
export class CardsService {
  sortBy$ = new BehaviorSubject<SortParamsWithDirection | string>("");

  searchStr$ = new BehaviorSubject<string>("");

  destroy$ = new Subject<boolean>();

  data?: ResponseModel;

  constructor(private httpService: HttpServiceService) {
    this.subscribeToSort();
  }

  getResponse() {
    return this.httpService.get<ResponseModel>();
  }

  subscribeToSort() {
    this.sortBy$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => this.sort(data as SortParamsWithDirection));
  }

  sort(sortDir: SortParamsWithDirection) {
    const items = this.data?.items as ResponseItemModel[];
    if (items) {
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

  getCards() {
    this.getResponse()
      .pipe()
      .subscribe((d) => {
        this.data = d;
      });
  }
}
