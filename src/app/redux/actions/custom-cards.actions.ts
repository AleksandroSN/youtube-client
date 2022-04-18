import { ResponseVideoItemModel } from "@app/shared";
import { createAction, props } from "@ngrx/store";
import { CustomCardsActionsName } from "@utils";

export const addCustomCard = createAction(
  CustomCardsActionsName.ADD,
  props<{ customCard: ResponseVideoItemModel }>(),
);
