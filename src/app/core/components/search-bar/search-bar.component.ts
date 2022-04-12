import { Component, HostBinding, OnInit } from "@angular/core";
import { CardsService, SearchService } from "@app/core/services";
import { debounceTime, filter } from "rxjs";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"],
})
export class SearchBarComponent implements OnInit {
  @HostBinding("class") class = "flex align-center justify-center flex-50 gap-5";

  searchStr = "";

  constructor(private searchService: SearchService, private cardsService: CardsService) {}

  onInput() {
    // this.cardsServise.getCards();
    this.searchService.updateSearchTerm(this.searchStr);
  }

  ngOnInit(): void {
    this.searchService.searchTerm$
      .pipe(
        filter((x) => x.length > 3),
        debounceTime(300)
        // switchMap((searchTrm) => this.cardsService.getCards());
      )
      .subscribe((y) => this.cardsService.getCards());
  }
}
