import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CardsService, InputValidationService } from "@app/core/services";
import { addCustomCard } from "@app/redux";
import { CreateCardForm, ResponseVideoItemModel } from "@app/shared";
import { Store } from "@ngrx/store";
import {
  DATE_INPUT,
  DESCRIPTION_INPUT,
  generateNewCard,
  IMG_LINK_INPUT,
  RegExForInputValidation,
  TITLE_INPUT,
  VIDEO_LINK_INPUT,
  VIDEO_PAGE,
} from "@utils";

@Component({
  selector: "app-create-card",
  templateUrl: "./create-card.component.html",
  styleUrls: ["./create-card.component.scss"],
})
export class CreateCardComponent implements OnInit {
  form?: FormGroup;

  cards: ResponseVideoItemModel[] = [];

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router,
    private cardService: CardsService,
    private inputValidationService: InputValidationService,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      description: ["", [Validators.maxLength(255)]],
      imgLink: ["", [Validators.required, Validators.pattern(RegExForInputValidation.urlValid)]],
      videoLink: ["", [Validators.required, Validators.pattern(RegExForInputValidation.urlValid)]],
      date: ["", [Validators.required, this.inputValidationService.dateVlidator()]],
    });
    this.cards = this.cardService.currentCards;
  }

  get title() {
    return this.form?.get(TITLE_INPUT);
  }

  get description() {
    return this.form?.get(DESCRIPTION_INPUT);
  }

  get imgLink() {
    return this.form?.get(IMG_LINK_INPUT);
  }

  get videoLink() {
    return this.form?.get(VIDEO_LINK_INPUT);
  }

  get date() {
    return this.form?.get(DATE_INPUT);
  }

  onSubmit() {
    const dataFromForm = this.form?.value as CreateCardForm;
    const newCard: ResponseVideoItemModel = generateNewCard(dataFromForm);
    this.store.dispatch(addCustomCard({ customCard: newCard }));
    this.cardService.data$.next([...this.cards, newCard]);
    this.router.navigateByUrl(`/${VIDEO_PAGE}`);
  }
}
