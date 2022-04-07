import { NgModule } from "@angular/core";
import { FormBuilder, FormsModule } from "@angular/forms";
import { SharedModule } from "@app/shared";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginFormComponent } from "./components";
import { LoginPageComponent } from "./pages";

@NgModule({
  declarations: [LoginFormComponent, LoginPageComponent],
  imports: [SharedModule, AuthRoutingModule, FormsModule],
  providers: [FormBuilder],
})
export class AuthModule {}
