import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundPageComponent } from "@app/core/pages";
import { AuthGuard } from "@app/core/guards";
import { LOGIN_PAGE, VIDEO_PAGE } from "@utils";

const routes: Routes = [
  { path: "", redirectTo: `/${VIDEO_PAGE}`, pathMatch: "full" },
  {
    path: VIDEO_PAGE,
    loadChildren: () => import("./youtube/youtube.module").then((m) => m.YoutubeModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: LOGIN_PAGE,
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
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
