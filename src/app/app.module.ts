import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { SorterComponent } from './components/sorter/sorter.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SearchResultItemComponent } from './components/search-result-item/search-result-item.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SearchBarComponent, SearchFilterComponent, SorterComponent, SearchResultComponent, SearchResultItemComponent, ButtonComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
