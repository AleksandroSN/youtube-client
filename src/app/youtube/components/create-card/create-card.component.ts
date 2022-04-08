import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CardsService, InputValidationService } from "@app/core/services";
import { ResponseItemModel } from "@app/shared";
import { RegExForInputValidation } from "@utils";

@Component({
  selector: "app-create-card",
  templateUrl: "./create-card.component.html",
  styleUrls: ["./create-card.component.scss"],
})
export class CreateCardComponent implements OnInit {
  form?: FormGroup;

  cards: ResponseItemModel[] = [];

  constructor(
    private cardService: CardsService,
    private fb: FormBuilder,
    private router: Router,
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
    const newCard: ResponseItemModel = {
      etag: "asdasd",
      id: "asdad",
      kind: "asdasd",
      snippet: {
        description: dataFromForm.description,
        publishedAt: dataFromForm.date,
        title: dataFromForm.title,
        thumbnails: {
          medium: {
            height: 180,
            width: 320,
            url: dataFromForm.imgLink,
          },
          standard: {
            height: 480,
            width: 640,
            url: dataFromForm.imgLink,
          },
        },
      },
      statistics: {
        commentCount: "51",
        dislikeCount: "22",
        favoriteCount: "222",
        likeCount: "333",
        viewCount: "323321",
      },
    };
    this.cardService.data$.next([...this.cards, newCard]);
    this.router.navigateByUrl("/video");
  }
}
