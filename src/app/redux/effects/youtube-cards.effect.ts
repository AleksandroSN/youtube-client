/* eslint-disable arrow-body-style */
import { Injectable } from "@angular/core";
import { CardsService } from "@app/core/services";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs";
import { addYoutubeCard, recieveSearchInput } from "../actions";

@Injectable()
export class YoutubeCardsEffects {
  recieveNewCard$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(recieveSearchInput),
      switchMap(({ searchTerm }) => {
        return this.cardsService
          .getCards(searchTerm)
          .pipe(map((cards) => addYoutubeCard({ youtubeCards: cards })));
      }),
    );
  });

  constructor(private actions$: Actions, private cardsService: CardsService) {}
}
