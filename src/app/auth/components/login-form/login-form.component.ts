import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { LoginService } from "@app/core/services";
import { User } from "@app/shared";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent {
  hide = true;

  login = new FormControl("", [Validators.required, Validators.minLength(3)]);

  password = new FormControl("", [
    Validators.required,
    Validators.minLength(3),
  ]);

  constructor(private loginService: LoginService) {}

  // eslint-disable-next-line class-methods-use-this
  onSubmit() {
    const user: User = {
      login: this.login.value,
      password: this.password.value,
    };
    this.loginService.login(user);
    // console.log(loginData);
  }
}
