import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { CardsService } from "@app/core/services";
import { ResponseItemModel } from "@app/shared";
import { filter, Subject, takeUntil } from "rxjs";

@Component({
  selector: "app-detail-item",
  templateUrl: "./detail-item.component.html",
  styleUrls: ["./detail-item.component.scss"],
})
export class DetailItemComponent implements OnInit, OnDestroy {
  card?: ResponseItemModel;

  destroy$ = new Subject<boolean>();

  constructor(
    private cardsService: CardsService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
    const itemId = this.route.snapshot.paramMap.get("id") as string;
    this.cardsService.detailData$
      .pipe(
        takeUntil(this.destroy$),
        filter((item) => item?.id === itemId),
      )
      .subscribe((c) => {
        this.card = c;
      });
    this.getCard(itemId);
  }

  getCard(itemId: string) {
    this.cardsService.getCardById(itemId);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
