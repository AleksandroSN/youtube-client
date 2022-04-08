import { SnippetLocalsModel } from "./snippetLocals";
import { SnippetThumbnailsModel } from "./snippetThumbnail";
import { TagModel } from "./snippetTag";

export interface ResponseItemSnippetModel {
  publishedAt: string;
  channelId?: string;
  title: string;
  description: string;
  thumbnails: SnippetThumbnailsModel;
  channelTitle?: string;
  tags?: TagModel[];
  categoryId?: string;
  liveBroadcastContent?: string;
  localized?: SnippetLocalsModel;
  defaultAudioLanguage?: string;
}
