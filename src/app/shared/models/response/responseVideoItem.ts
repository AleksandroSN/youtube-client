import { ResponseItemSnippetModel } from "./responseItemSnippet";
import { ResponseItemStatisticsModel } from "./responseItemStatistics";

export interface ResponseVideoItemModel {
  kind: string;
  etag: string;
  id: string;
  snippet: ResponseItemSnippetModel;
  statistics: ResponseItemStatisticsModel;
}
