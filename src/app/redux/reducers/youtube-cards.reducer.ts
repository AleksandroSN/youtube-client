import { createFeature, createReducer, on } from "@ngrx/store";
import { YOUTUBE_CARD_FEATURE_KEY } from "@utils";
import { addYoutubeCard } from "../actions";
import { YoutubeCardsState } from "../state.models";

const INITIAL_STATE: YoutubeCardsState = {
  youtubeCards: [],
};

export const youtubeCardsFeature = createFeature({
  name: YOUTUBE_CARD_FEATURE_KEY,
  reducer: createReducer(
    INITIAL_STATE,
    on(
      addYoutubeCard,
      (state, { youtubeCards }): YoutubeCardsState => ({
        ...state,
        youtubeCards,
      }),
    ),
  ),
});
