import { ResponseVideoItemModel } from "@app/shared";
import { createAction, props } from "@ngrx/store";

export const addCustomCard = createAction(
  "[Custom Card] custom card is add",
  props<{ customCard: ResponseVideoItemModel }>(),
);
