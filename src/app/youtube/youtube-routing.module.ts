import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SearchResultPageComponent, DetailPageComponent } from "./pages";

const routes: Routes = [
  {
    path: "",
    component: SearchResultPageComponent,
  },
  {
    path: ":id",
    component: DetailPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
