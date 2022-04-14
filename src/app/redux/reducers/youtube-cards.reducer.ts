import { ResponseVideoItemModel } from "@app/shared";
import {
  createFeatureSelector, createReducer, createSelector, on,
} from "@ngrx/store";
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
    (state, { youtubeCards }): YoutubeCardsState => ({
      ...state,
      youtubeCards,
    }),
  ),
);

export const selectYoutubeCardsStore = createFeatureSelector<YoutubeCardsState>("youtubeCardsStore");

export const selectYoutubeCards = createSelector(
  selectYoutubeCardsStore,
  (state) => state.youtubeCards,
);
