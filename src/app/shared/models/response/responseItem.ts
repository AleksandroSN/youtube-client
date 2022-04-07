import { ResponseItemSnippetModel } from "./responseItemSnippet";
import { ResponseItemStatisticsModel } from "./responseItemStatistics";

export interface ResponseItemModel {
  kind: string;
  etag: string;
  id: string;
  snippet: ResponseItemSnippetModel;
  statistics: ResponseItemStatisticsModel;
}
