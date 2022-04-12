import { Injectable } from "@angular/core";
import { ResponseSearchModel, ResponseVideoItemModel, ResponseVideoModel } from "@app/shared";
// import { ResponseItemModel, ResponseModel } from "@app/shared";
import { BehaviorSubject, map, switchMap } from "rxjs";
import { HttpServiceService } from "../http-service";

@Injectable()
export class CardsService {
  data$ = new BehaviorSubject<ResponseVideoItemModel[]>([]);

  detailData$ = new BehaviorSubject<ResponseVideoItemModel | undefined>(undefined);

  constructor(private httpService: HttpServiceService) {
    this.getCards("JS");
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
          return this.httpService
            .getVideosByIds<ResponseVideoModel>(ids)
            .pipe(map((video) => video.items));
        })
      )
      .subscribe((d) => {
        this.data$.next(d);
      });
  }

  // getCards(): void {
  //   this.getResponse()
  //     // .pipe(map((data) => data.items))
  //     .subscribe((d) => {
  //       console.log(d);
  //       // this.data$.next(d);
  //     });
  // }

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
