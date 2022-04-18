import { ActionReducerMap } from "@ngrx/store";
import { YoutubeCardsEffects } from "./effects";
import { customCardsReducers, youtubeCardsReducers } from "./reducers";
import { YoutubeAppState } from "./state.models";

export const appReducers: ActionReducerMap<YoutubeAppState> = {
  customCardsFeature: customCardsReducers,
  youtubeCardsFeature: youtubeCardsReducers,
};

export const appEffects = [YoutubeCardsEffects];

export * from "./actions";
export * from "./state.models";
export * from "./selectors";
