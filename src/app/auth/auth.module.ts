import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginFormComponent } from "./components";
import { LoginPageComponent } from "./pages";

@NgModule({
  declarations: [LoginFormComponent, LoginPageComponent],
  imports: [SharedModule, AuthRoutingModule],
  // exports: [LoginPageComponent],
})
export class AuthModule {}
