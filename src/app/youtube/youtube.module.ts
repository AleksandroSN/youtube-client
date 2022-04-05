import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared";
import { SearchResultComponent, SearchResultItemComponent } from "./components";
import { SearchResultPageComponent, DetailPageComponent } from "./pages";

@NgModule({
  declarations: [
    SearchResultComponent,
    SearchResultItemComponent,
    SearchResultPageComponent,
    DetailPageComponent,
  ],
  imports: [SharedModule],
  exports: [SearchResultPageComponent, DetailPageComponent],
})
export class YoutubeModule {}
