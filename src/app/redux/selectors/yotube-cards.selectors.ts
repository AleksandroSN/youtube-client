import { createSelector } from "@ngrx/store";
import { youtubeCardsFeature } from "../reducers";

export const selectYoutubeCards = createSelector(
  youtubeCardsFeature.selectYoutubeCards,
  (youtubeCards) => youtubeCards,
);
