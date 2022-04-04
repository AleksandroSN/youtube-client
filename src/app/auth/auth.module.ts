import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared";
import { LoginFormComponent } from "./components";
import { LoginComponent } from "./pages";

@NgModule({
  declarations: [LoginFormComponent, LoginComponent],
  imports: [SharedModule],
})
export class AuthModule {}
