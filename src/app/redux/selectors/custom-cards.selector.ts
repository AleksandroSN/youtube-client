import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CUSTOM_CARD_FEATURE_KEY } from "@utils";
import { CustomCardsState } from "../state.models";

// eslint-disable-next-line max-len
export const selectCustomCardsStore = createFeatureSelector<CustomCardsState>(CUSTOM_CARD_FEATURE_KEY);

export const selectCustomCards = createSelector(
  selectCustomCardsStore,
  (state) => state.customCards,
);
