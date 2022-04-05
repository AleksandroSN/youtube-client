import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
  SearchResultPageComponent,
  DetailPageComponent,
} from "@app/youtube/pages";
import { LoginPageComponent } from "@app/auth/pages";
import { NotFoundPageComponent } from "@app/core/pages";

const routes: Routes = [
  {
    path: "home",
    component: SearchResultPageComponent,
  },
  {
    path: "home/:id",
    component: DetailPageComponent,
  },
  {
    path: "login",
    component: LoginPageComponent,
  },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "**",
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
