import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "@app/shared";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginFormComponent } from "./components";
import { LoginPageComponent } from "./pages";

@NgModule({
  declarations: [LoginFormComponent, LoginPageComponent],
  imports: [SharedModule, AuthRoutingModule, FormsModule],
  // exports: [LoginPageComponent],
})
export class AuthModule {}
