import { ResponseVideoItemModel } from "@app/shared";
import { createAction, props } from "@ngrx/store";
import { YoutubeCardsActionsName } from "@utils";

export const addYoutubeCard = createAction(
  YoutubeCardsActionsName.ADD,
  props<{ youtubeCards: ResponseVideoItemModel[] }>(),
);
