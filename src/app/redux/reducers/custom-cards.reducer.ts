import {
  Action, ActionReducer, createReducer, on,
} from "@ngrx/store";
import { addCustomCard } from "../actions";
import { CustomCardsState } from "../state.models";

const INITIAL_STATE: CustomCardsState = {
  customCards: [],
};

export const customCardsReducers: ActionReducer<CustomCardsState, Action> = createReducer(
  INITIAL_STATE,
  on(
    addCustomCard,
    (state, { customCard }): CustomCardsState => ({
      ...state,
      customCards: [...state.customCards, customCard],
    }),
  ),
);
