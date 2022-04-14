import { ResponseVideoItemModel } from "@app/shared";
import { createReducer, on } from "@ngrx/store";
import { addYoutubeCard } from "../actions";

export interface YoutubeCardsState {
  youtubeCards: ResponseVideoItemModel[];
}

const INITIAL_STATE: YoutubeCardsState = {
  youtubeCards: [],
};

export const youtubeCardsReducers = createReducer(
  INITIAL_STATE,
  on(
    addYoutubeCard,
    (state, { youtubeCard }): YoutubeCardsState => ({
      ...state,
      youtubeCards: [...state.youtubeCards, youtubeCard],
    }),
  ),
);
