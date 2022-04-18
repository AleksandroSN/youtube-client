import { createAction, props } from "@ngrx/store";
import { CardActionsName } from "@utils";

export const recieveSearchInput = createAction(
  CardActionsName.NEW_INPUT,
  props<{ searchTerm: string }>(),
);
