import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CardsService, InputValidationService } from "@app/core/services";
import { RegExForInputValidation } from "@utils";

@Component({
  selector: "app-create-card",
  templateUrl: "./create-card.component.html",
  styleUrls: ["./create-card.component.scss"],
})
export class CreateCardComponent implements OnInit {
  form?: FormGroup;

  constructor(
    private cardService: CardsService,
    private fb: FormBuilder,
    private inputValidationService: InputValidationService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      description: ["", [Validators.maxLength(255)]],
      imgLink: ["", [Validators.required, Validators.pattern(/www/)]],
      videoLink: ["", [Validators.required, Validators.pattern(/www/)]],
      date: ["", [Validators.required]],
    });
  }

  get title() {
    return this.form?.get("title");
  }

  get description() {
    return this.form?.get("description");
  }

  get imgLink() {
    return this.form?.get("imgLink");
  }

  get videoLink() {
    return this.form?.get("videoLink");
  }

  get date() {
    return this.form?.get("date");
  }

  onSubmit() {
    const dataFromForm = this.form?.value;
    console.log(dataFromForm);
    // const userName = getUsernameFromEmail(dataFromForm.login);
    // const user: User = {
    //   login: userName,
    //   password: dataFromForm.password,
    // };
    // this.loginService.login(user);
  }
}
