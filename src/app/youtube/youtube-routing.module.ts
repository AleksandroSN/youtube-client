import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SearchResultPageComponent, DetailPageComponent, AdminPageComponent } from "./pages";

const routes: Routes = [
  {
    path: "admin",
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
