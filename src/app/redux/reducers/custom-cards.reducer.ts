import { ResponseVideoItemModel } from "@app/shared";
import { createReducer, on } from "@ngrx/store";
import { addCustomCard } from "../actions";

export interface CustomCardsState {
  customCards: ResponseVideoItemModel[];
}

const INITIAL_STATE: CustomCardsState = {
  customCards: [],
};

export const customCardsReducers = createReducer(
  INITIAL_STATE,
  on(
    addCustomCard,
    (state, { customCard }): CustomCardsState => ({
      ...state,
      customCards: [...state.customCards, customCard],
    }),
  ),
);
