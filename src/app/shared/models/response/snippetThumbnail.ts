type ThumbnailWidth = 120 | 320 | 480 | 640 | 1280;
type ThumbnailHeight = 90 | 180 | 360 | 480 | 720;

interface ThumbnailModel {
  url: string;
  width: ThumbnailWidth;
  height: ThumbnailHeight;
}

export interface SnippetThumbnailsModel {
  default?: ThumbnailModel;
  medium?: ThumbnailModel;
  high?: ThumbnailModel;
  standard?: ThumbnailModel;
  maxres?: ThumbnailModel;
  channelTitle?: string;
}
