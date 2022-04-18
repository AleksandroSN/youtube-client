import { Injectable } from "@angular/core";
import { ResponseSearchModel, ResponseVideoItemModel, ResponseVideoModel } from "@app/shared";
import {
  BehaviorSubject, finalize, map, Observable, switchMap,
} from "rxjs";
import { HttpServiceService } from "../http-service";

@Injectable()
export class CardsService {
  detailData$ = new BehaviorSubject<ResponseVideoItemModel | undefined>(undefined);

  isLoad$ = new BehaviorSubject<boolean>(false);

  constructor(private httpService: HttpServiceService) {}

  getCards(searchTerm: string): Observable<ResponseVideoItemModel[]> {
    this.isLoad$.next(true);
    return this.httpService.getByWord<ResponseSearchModel>(searchTerm).pipe(
      map((res) => res.items),
      switchMap((items) => {
        const ids = items.map((it) => it.id.videoId).join(",");
        return this.getResponseByIds(ids);
      }),
      finalize(() => this.isLoad$.next(false)),
    );
  }

  private getResponseByIds(ids: string): Observable<ResponseVideoItemModel[]> {
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
