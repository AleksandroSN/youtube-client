import { PageInfoResponseModel } from "./pageInfoResponse";
import { ResponseSearchItemModel } from "./responseSearchItem";

export interface ResponseSearchModel {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfoResponseModel;
  items: ResponseSearchItemModel[];
}
