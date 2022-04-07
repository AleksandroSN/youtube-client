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
  LoginService,
} from "./services";
import { NotFoundPageComponent } from "./pages";
import { AuthGuard } from "./guards";

@NgModule({
  declarations: [
    HeaderComponent,
    ProfileComponent,
    SearchBarComponent,
    SearchFilterComponent,
    SearchFilterBtnComponent,
    NotFoundPageComponent,
  ],
  providers: [
    HttpServiceService,
    FiltersService,
    ErrorService,
    CardsService,
    LoginService,
    AuthGuard,
  ],
  imports: [SharedModule, FormsModule],
  exports: [HeaderComponent, NotFoundPageComponent],
})
export class CoreModule {}
