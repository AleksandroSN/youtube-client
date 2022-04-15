import { ResponseVideoItemModel } from "@app/shared";

export interface YoutubeAppState {
  customCardsFeature: CustomCardsState;
  youtubeCardsFeature: YoutubeCardsState;
}
export interface CustomCardsState {
  customCards: ResponseVideoItemModel[];
}

export interface YoutubeCardsState {
  youtubeCards: ResponseVideoItemModel[];
}
