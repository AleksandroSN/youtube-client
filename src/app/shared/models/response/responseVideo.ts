import { PageInfoResponseModel } from "./pageInfoResponse";
import { ResponseVideoItemModel } from "./responseVideoItem";

export interface ResponseVideoModel {
  kind: string;
  etag: string;
  items: ResponseVideoItemModel[];
  pageInfo: PageInfoResponseModel;
}
