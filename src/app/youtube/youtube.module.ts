import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "@app/shared";
import {
  SearchResultComponent,
  SearchResultItemComponent,
  DetailItemComponent,
  CreateCardComponent,
} from "./components";
import { SearchResultPageComponent, DetailPageComponent, AdminPageComponent } from "./pages";
import { YoutubeRoutingModule } from "./youtube-routing.module";

@NgModule({
  declarations: [
    SearchResultComponent,
    SearchResultItemComponent,
    SearchResultPageComponent,
    DetailPageComponent,
    DetailItemComponent,
    AdminPageComponent,
    CreateCardComponent,
  ],
  imports: [SharedModule, YoutubeRoutingModule, FormsModule],
})
export class YoutubeModule {}
