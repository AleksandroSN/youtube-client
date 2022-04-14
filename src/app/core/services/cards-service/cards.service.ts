import { Injectable } from "@angular/core";
import { addYoutubeCard } from "@app/redux";
import { selectYoutubeCards } from "@app/redux/reducers/youtube-cards.reducer";
import { ResponseSearchModel, ResponseVideoItemModel, ResponseVideoModel } from "@app/shared";
import { Store } from "@ngrx/store";
import {
  BehaviorSubject, finalize, map, Observable, switchMap,
} from "rxjs";
import { HttpServiceService } from "../http-service";

@Injectable()
export class CardsService {
  // data$ = new BehaviorSubject<ResponseVideoItemModel[]>([]);
  data$ = new Observable<ResponseVideoItemModel[]>();

  detailData$ = new BehaviorSubject<ResponseVideoItemModel | undefined>(undefined);

  isLoad$ = new BehaviorSubject<boolean>(false);

  constructor(private httpService: HttpServiceService, private store: Store) {
    this.data$ = this.store.select(selectYoutubeCards);
  }

  getCards(searchTerm: string) {
    this.isLoad$.next(true);
    this.httpService
      .getByWord<ResponseSearchModel>(searchTerm)
      .pipe(
        map((res) => res.items),
        switchMap((items) => {
          const ids = items.map((it) => it.id.videoId).join(",");
          return this.getResponseByIds(ids);
        }),
        finalize(() => this.isLoad$.next(false)),
      )
      .subscribe((d) => {
        this.store.dispatch(addYoutubeCard({ youtubeCards: d }));
      });
  }

  getResponseByIds(ids: string) {
    return this.httpService
      .getVideosByIds<ResponseVideoModel>(ids)
      .pipe(map((video) => video.items));
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
