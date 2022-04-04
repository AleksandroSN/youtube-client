import {
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { CardsService } from "@app/core/services";
import { ResponseModel } from "@app/shared";

@Component({
  selector: "app-search-result",
  templateUrl: "./search-result.component.html",
  styleUrls: ["./search-result.component.scss"],
})
export class SearchResultComponent implements OnInit, DoCheck, OnDestroy {
  cards?: ResponseModel;

  searchStr: string = "";

  constructor(private cardsService: CardsService) {}

  ngOnInit(): void {
    this.cardsService.searchStr$.subscribe((str) => {
      this.searchStr = str;
    });
  }

  ngDoCheck(): void {
    this.cards = this.cardsService.data;
  }

  ngOnDestroy(): void {
    this.cardsService.destroy$.next(true);
    this.cardsService.destroy$.complete();
  }
}
