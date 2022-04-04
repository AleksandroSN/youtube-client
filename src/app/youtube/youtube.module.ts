import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared";
import { SearchResultComponent, SearchResultItemComponent } from "./components";

@NgModule({
  declarations: [SearchResultComponent, SearchResultItemComponent],
  imports: [SharedModule],
  exports: [SearchResultComponent],
})
export class YoutubeModule {}
