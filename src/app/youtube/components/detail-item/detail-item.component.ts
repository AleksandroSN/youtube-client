import { Component, DoCheck, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { CardsService } from "@app/core/services";
import { ResponseItemModel } from "@app/shared";
import { takeUntil } from "rxjs";

@Component({
  selector: "app-detail-item",
  templateUrl: "./detail-item.component.html",
  styleUrls: ["./detail-item.component.scss"],
})
export class DetailItemComponent implements OnInit, OnDestroy, DoCheck {
  // bug border-bottom color prev card
  card?: ResponseItemModel;

  cardId: string = "";

  constructor(
    private cardsService: CardsService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCard();
  }

  ngDoCheck(): void {
    this.card = this.cardsService.detailData;
  }

  getCard() {
    this.route.params
      .pipe(takeUntil(this.cardsService.destroy$))
      .subscribe((param) => {
        this.cardId = param["id"];
      });
    this.cardsService.getCard(this.cardId);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.cardsService.destroy$.next(true);
    this.cardsService.destroy$.complete();
  }
}
