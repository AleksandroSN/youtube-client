import { createSelector } from "@ngrx/store";
import { customCardsFeature } from "../reducers";

export const selectCustomCards = createSelector(
  customCardsFeature.selectCustomCards,
  (customCards) => customCards,
);
