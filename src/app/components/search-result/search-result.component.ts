import { Component, OnInit } from "@angular/core";
import { CardsService } from "@app/services";
import { ResponseModel } from "@shared";

@Component({
  selector: "app-search-result",
  templateUrl: "./search-result.component.html",
  styleUrls: ["./search-result.component.scss"],
})
export class SearchResultComponent implements OnInit {
  cards!: ResponseModel;

  constructor(private cardsService: CardsService) {}

  ngOnInit(): void {
    this.getCards();
  }

  getCards() {
    this.cardsService.getResponse().subscribe((cards) => {
      this.cards = cards;
    });
  }
}
