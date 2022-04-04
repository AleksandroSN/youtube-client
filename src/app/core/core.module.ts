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

@NgModule({
  declarations: [
    HeaderComponent,
    ProfileComponent,
    SearchBarComponent,
    SearchFilterComponent,
    SearchFilterBtnComponent,
  ],
  providers: [HttpServiceService, FiltersService, ErrorService, CardsService],
  imports: [SharedModule, FormsModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
