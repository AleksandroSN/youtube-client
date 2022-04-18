import { ActionReducerMap } from "@ngrx/store";
import { CUSTOM_CARD_FEATURE_KEY, YOUTUBE_CARD_FEATURE_KEY } from "@utils";
import { YoutubeCardsEffects } from "./effects";
import { customCardsFeature, youtubeCardsFeature } from "./reducers";
import { YoutubeAppState } from "./state.models";

export const appReducers: ActionReducerMap<YoutubeAppState> = {
  [CUSTOM_CARD_FEATURE_KEY]: customCardsFeature.reducer,
  [YOUTUBE_CARD_FEATURE_KEY]: youtubeCardsFeature.reducer,
};

export const appEffects = [YoutubeCardsEffects];

export * from "./actions";
export * from "./state.models";
export * from "./selectors";
