import { ActionReducerMap } from "@ngrx/store";
import { customCardsReducers, youtubeCardsReducers } from "./reducers";
import { YoutubeAppState } from "./state.models";

export const appReducers: ActionReducerMap<YoutubeAppState> = {
  customCardsFeature: customCardsReducers,
  youtubeCardsFeature: youtubeCardsReducers,
};

export * from "./actions";
export * from "./state.models";
export * from "./selectors";
