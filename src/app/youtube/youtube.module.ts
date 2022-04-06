import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared";
import {
  SearchResultComponent,
  SearchResultItemComponent,
  DetailItemComponent,
} from "./components";
import { SearchResultPageComponent, DetailPageComponent } from "./pages";
import { YoutubeRoutingModule } from "./youtube-routing.module";

@NgModule({
  declarations: [
    SearchResultComponent,
    SearchResultItemComponent,
    SearchResultPageComponent,
    DetailPageComponent,
    DetailItemComponent,
  ],
  imports: [SharedModule, YoutubeRoutingModule],
  // exports: [SearchResultPageComponent, DetailPageComponent],
})
export class YoutubeModule {}
