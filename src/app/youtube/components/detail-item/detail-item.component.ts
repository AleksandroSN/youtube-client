import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { CardsService } from "@app/core/services";
import { ResponseVideoItemModel } from "@app/shared";
import { filter, Subject, takeUntil } from "rxjs";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: "app-detail-item",
  templateUrl: "./detail-item.component.html",
  styleUrls: ["./detail-item.component.scss"],
})
export class DetailItemComponent implements OnInit, OnDestroy {
  card?: ResponseVideoItemModel;

  safeURL?: SafeResourceUrl;

  destroy$ = new Subject<boolean>();

  constructor(
    private cardsService: CardsService,
    private route: ActivatedRoute,
    private location: Location,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    const itemId = this.route.snapshot.paramMap.get("id") as string;
    this.cardsService.detailData$
      .pipe(
        takeUntil(this.destroy$),
        filter((item) => item?.id === itemId),
      )
      .subscribe((c) => {
        const videoURL = `https://www.youtube-nocookie.com/embed/${c?.id}`;
        this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(videoURL);
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
