import { ActionReducerMap } from "@ngrx/store";
import { customCardsReducers, CustomCardsState } from "./custom-cards.reducer";
import { youtubeCardsReducers, YoutubeCardsState } from "./youtube-cards.reducer";

export interface State {
  customCardsStore: CustomCardsState;
  youtubeCardsStore: YoutubeCardsState;
}

export const reducers: ActionReducerMap<State> = {
  customCardsStore: customCardsReducers,
  youtubeCardsStore: youtubeCardsReducers,
};
