import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "@app/shared";
import {
  HeaderComponent,
  ProfileComponent,
  SearchBarComponent,
  SearchFilterComponent,
  SearchFilterBtnComponent,
} from "./components";
import {
  CardsService,
  ErrorService,
  FiltersService,
  HttpServiceService,
} from "./services";
import { NotFoundPageComponent } from "./pages";

@NgModule({
  declarations: [
    HeaderComponent,
    ProfileComponent,
    SearchBarComponent,
    SearchFilterComponent,
    SearchFilterBtnComponent,
    NotFoundPageComponent,
  ],
  providers: [HttpServiceService, FiltersService, ErrorService, CardsService],
  imports: [SharedModule, FormsModule],
  exports: [HeaderComponent, NotFoundPageComponent],
})
export class CoreModule {}
