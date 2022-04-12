import { Component, Input } from "@angular/core";
import { ResponseVideoItemModel } from "@app/shared";

@Component({
  selector: "app-search-result-item",
  templateUrl: "./search-result-item.component.html",
  styleUrls: ["./search-result-item.component.scss"],
})
export class SearchResultItemComponent {
  @Input() card!: ResponseVideoItemModel;
}
