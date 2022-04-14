import { ResponseVideoItemModel } from "@app/shared";
import { createAction, props } from "@ngrx/store";

export const addYoutubeCard = createAction(
  "[Youtube Card] card from youtube is add",
  props<{ youtubeCard: ResponseVideoItemModel }>(),
);
