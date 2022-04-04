import { Injectable } from "@angular/core";
import { ResponseModel, SortParamsWithDirection } from "@app/shared";
import { BehaviorSubject, Subject, takeUntil } from "rxjs";
import { FiltersService } from "../filters-service";
import { HttpServiceService } from "../http-service";

@Injectable()
export class CardsService {
  sortBy$ = new BehaviorSubject<SortParamsWithDirection | string>("");

  searchStr$ = new BehaviorSubject<string>("");

  destroy$ = new Subject<boolean>();

  data?: ResponseModel;

  constructor(
    private httpService: HttpServiceService,
    private filtersService: FiltersService,
  ) {
    this.subscribeToSort();
  }

  getResponse() {
    return this.httpService.get<ResponseModel>();
  }

  subscribeToSort() {
    this.sortBy$.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.filtersService.sort(
        data as SortParamsWithDirection,
        this.data as ResponseModel,
      );
    });
  }

  getCards() {
    this.getResponse()
      .pipe()
      .subscribe((d) => {
        this.data = d;
      });
  }
}
