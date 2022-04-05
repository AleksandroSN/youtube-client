import { Injectable } from "@angular/core";
import {
  ResponseItemModel,
  ResponseModel,
  SortParamsWithDirection,
} from "@app/shared";
import { BehaviorSubject, Observable, Subject, takeUntil } from "rxjs";
import { FiltersService } from "../filters-service";
import { HttpServiceService } from "../http-service";

@Injectable()
export class CardsService {
  sortBy$ = new BehaviorSubject<SortParamsWithDirection | string>("");

  searchStr$ = new BehaviorSubject<string>("");

  destroy$ = new Subject<boolean>();

  data?: ResponseModel;

  detailData?: ResponseItemModel;

  constructor(
    private httpService: HttpServiceService,
    private filtersService: FiltersService
  ) {
    this.subscribeToSort();
  }

  getResponse(): Observable<ResponseModel> {
    return this.httpService.get<ResponseModel>();
  }

  subscribeToSort(): void {
    this.sortBy$.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.filtersService.sort(
        data as SortParamsWithDirection,
        this.data as ResponseModel
      );
    });
  }

  getCards(): void {
    this.getResponse()
      .pipe()
      .subscribe((d) => {
        this.data = d;
      });
  }

  getCard(id: string): void {
    this.getResponse().subscribe((d) => {
      const card = d.items.find((c) => c.id === id);
      this.detailData = card;
    });
  }
}
