import { createFeatureSelector, createSelector } from "@ngrx/store";
import { YOUTUBE_CARD_FEATURE_KEY } from "@utils";
import { YoutubeCardsState } from "../state.models";

// eslint-disable-next-line max-len
export const selectYoutubeCardsStore = createFeatureSelector<YoutubeCardsState>(YOUTUBE_CARD_FEATURE_KEY);

export const selectYoutubeCards = createSelector(
  selectYoutubeCardsStore,
  (state) => state.youtubeCards,
);
