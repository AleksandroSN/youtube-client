import { Injectable } from "@angular/core";
import { ResponseSearchModel, ResponseVideoItemModel, ResponseVideoModel } from "@app/shared";
import { DEBOUNCE_TIME, MIN_LENGTH_CHARACTERS } from "@utils";
// import { ResponseItemModel, ResponseModel } from "@app/shared";
import {
  BehaviorSubject, debounceTime, filter, map, switchMap,
} from "rxjs";
import { HttpServiceService } from "../http-service";
import { SearchService } from "../search-service";

@Injectable()
export class CardsService {
  data$ = new BehaviorSubject<ResponseVideoItemModel[]>([]);

  detailData$ = new BehaviorSubject<ResponseVideoItemModel | undefined>(undefined);

  constructor(private httpService: HttpServiceService, private searchService: SearchService) {
    this.subscibeToSearchTerm();
  }

  get currentCards(): ResponseVideoItemModel[] {
    return this.data$.value;
  }

  getCards(searchTerm: string) {
    this.httpService
      .getByWord<ResponseSearchModel>(searchTerm)
      .pipe(
        map((res) => res.items),
        switchMap((items) => {
          const ids = items.map((it) => it.id.videoId).join(",");
          return this.getResponseByIds(ids);
        }),
      )
      .subscribe((d) => {
        this.data$.next(d);
      });
  }

  getResponseByIds(ids: string) {
    return this.httpService
      .getVideosByIds<ResponseVideoModel>(ids)
      .pipe(map((video) => video.items));
  }

  subscibeToSearchTerm() {
    this.searchService.searchTerm$
      .pipe(
        filter((str) => str.length > MIN_LENGTH_CHARACTERS),
        debounceTime(DEBOUNCE_TIME),
      )
      .subscribe((searchStr) => this.getCards(searchStr));
  }

  getCardById(id: string): void {
    this.httpService
      .getVideosByIds<ResponseVideoModel>(id)
      .pipe(map((res) => res.items))
      .subscribe((card) => {
        const firstCard = card[0];
        this.detailData$.next(firstCard);
      });
  }
}
