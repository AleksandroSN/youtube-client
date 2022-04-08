import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { InputValidationService, LoginService } from "@app/core/services";
import { User } from "@app/shared";
import { getUsernameFromEmail } from "@utils";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent implements OnInit {
  hide = true;

  form?: FormGroup;

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private inputValidationService: InputValidationService,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      login: ["", [Validators.required, Validators.email]],
      password: [
        "",
        [Validators.required, this.inputValidationService.passwordValidator()],
      ],
    });
  }

  get login() {
    return this.form?.get("login");
  }

  get password() {
    return this.form?.get("password");
  }

  onSubmit() {
    const dataFromForm = this.form?.value as User;
    const userName = getUsernameFromEmail(dataFromForm.login);
    const user: User = {
      login: userName,
      password: dataFromForm.password,
    };
    this.loginService.login(user);
  }
}
