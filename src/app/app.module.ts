import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "@app/modules";
import { SortDirective } from "@app/directives";
import { FilterPipe } from "@app/pipes";
import {
  ButtonComponent,
  HeaderComponent,
  ProfileComponent,
  SearchBarComponent,
  SearchFilterComponent,
  SearchResultComponent,
  SearchResultItemComponent,
  SorterComponent,
} from "@app/components";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    SearchFilterComponent,
    SorterComponent,
    SearchResultComponent,
    SearchResultItemComponent,
    ButtonComponent,
    ProfileComponent,
    SortDirective,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
