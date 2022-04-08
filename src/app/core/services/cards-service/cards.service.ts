import { Injectable } from "@angular/core";
import { ResponseItemModel, ResponseModel } from "@app/shared";
import { BehaviorSubject, map, Observable } from "rxjs";
import { HttpServiceService } from "../http-service";

@Injectable()
export class CardsService {
  data$ = new BehaviorSubject<ResponseItemModel[]>([]);

  detailData$ = new BehaviorSubject<ResponseItemModel | undefined>(undefined);

  constructor(private httpService: HttpServiceService) {}

  get currentCards(): ResponseItemModel[] {
    return this.data$.value;
  }

  getResponse(): Observable<ResponseModel> {
    return this.httpService.get<ResponseModel>();
  }

  getCards(): void {
    this.getResponse()
      .pipe(map((data) => data.items))
      .subscribe((d) => {
        this.data$.next(d);
      });
  }

  getCardById(id: string): void {
    const card = this.currentCards.find((c) => c.id === id);
    this.detailData$.next(card);
  }
}
