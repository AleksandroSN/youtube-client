import { Injectable } from "@angular/core";
import { ResponseItemModel, ResponseModel } from "@app/shared";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpServiceService } from "../http-service";

@Injectable()
export class CardsService {
  data$ = new BehaviorSubject<ResponseModel | undefined>(undefined);

  detailData$ = new BehaviorSubject<ResponseItemModel | undefined>(undefined);

  constructor(private httpService: HttpServiceService) {}

  getResponse(): Observable<ResponseModel> {
    return this.httpService.get<ResponseModel>();
  }

  getCards(): void {
    this.getResponse()
      .pipe()
      .subscribe((d) => {
        this.data$.next(d);
      });
  }

  getCardById(id: string): void {
    this.getResponse().subscribe((d) => {
      const card = d.items.find((c) => c.id === id);
      this.detailData$.next(card);
    });
  }
}
