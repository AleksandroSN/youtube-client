import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SearchResultPageComponent } from "@app/youtube/pages";
import { LoginPageComponent } from "@app/auth/pages";
import { NotFoundPageComponent } from "@app/core/pages";

const routes: Routes = [
  {
    path: "",
    component: SearchResultPageComponent,
  },
  {
    path: "login",
    component: LoginPageComponent,
  },
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
