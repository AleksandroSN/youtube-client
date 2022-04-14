import { ResponseVideoItemModel } from "@app/shared";

export interface YoutubeAppStore {
  customCards: ResponseVideoItemModel[];
  youtubeApiCards: ResponseVideoItemModel[];
}
