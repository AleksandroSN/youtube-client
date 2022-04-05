import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared";
import { LoginFormComponent } from "./components";
import { LoginPageComponent } from "./pages";

@NgModule({
  declarations: [LoginFormComponent, LoginPageComponent],
  imports: [SharedModule],
  exports: [LoginPageComponent],
})
export class AuthModule {}
