import { createReducer, on } from "@ngrx/store";
import { addYoutubeCard } from "../actions";
import { YoutubeCardsState } from "../state.models";

const INITIAL_STATE: YoutubeCardsState = {
  youtubeCards: [],
};

export const youtubeCardsReducers = createReducer(
  INITIAL_STATE,
  on(
    addYoutubeCard,
    (state, { youtubeCards }): YoutubeCardsState => ({
      ...state,
      youtubeCards,
    }),
  ),
);
