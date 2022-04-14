import { ResponseVideoItemModel } from "@app/shared";
import {
  createFeatureSelector, createReducer, createSelector, on,
} from "@ngrx/store";
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

export const selectCustomCardsStore = createFeatureSelector<CustomCardsState>("customCardsStore");

export const selectCustomCards = createSelector(
  selectCustomCardsStore,
  (state) => state.customCards,
);
