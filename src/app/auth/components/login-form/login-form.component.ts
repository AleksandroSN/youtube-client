import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "@app/core/services";
import { User } from "@app/shared";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent implements OnInit {
  hide = true;

  form?: FormGroup;

  constructor(private loginService: LoginService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(3)]],
    });
  }

  get email() {
    return this.form?.get("email");
  }

  get password() {
    return this.form?.get("password");
  }

  onSubmit() {
    const dataFromForm = this.form?.value;
    const user: User = {
      login: dataFromForm.login,
      password: dataFromForm.password,
    };
    this.loginService.login(user);
  }
}
