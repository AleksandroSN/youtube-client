import { Component, HostBinding } from "@angular/core";
import { CardsService } from "@app/core/services";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"],
})
export class SearchBarComponent {
  @HostBinding("class") class = "flex align-center justify-center flex-50 gap-5";

  constructor(private cardsServise: CardsService) {}

  onSubmit() {
    this.cardsServise.getCards();
  }
}
