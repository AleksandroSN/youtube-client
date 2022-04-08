import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ADMIN_PAGE } from "@utils";
import { SearchResultPageComponent, DetailPageComponent, AdminPageComponent } from "./pages";

const routes: Routes = [
  {
    path: ADMIN_PAGE,
    component: AdminPageComponent,
  },
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
