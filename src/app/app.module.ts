import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "@app/modules";
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
