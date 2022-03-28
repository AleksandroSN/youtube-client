import { Component, HostBinding } from "@angular/core";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"],
})
export class SearchBarComponent {
  @HostBinding("class") class = "flex align-center justify-center flex-33 gap-5";
}
