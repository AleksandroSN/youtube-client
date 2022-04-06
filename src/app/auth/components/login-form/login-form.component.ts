import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

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

  // eslint-disable-next-line class-methods-use-this
  onSubmit() {
    const loginData = {
      login: this.login.value,
      pass: this.password.value,
    };
    console.log(loginData);
  }
}
