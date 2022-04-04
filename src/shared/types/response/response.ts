import { PageInfoResponseModel } from "./pageInfoResponse";
import { ResponseItemModel } from "./responseItem";

export interface ResponseModel {
  kind: string;
  etag: string;
  pageInfo: PageInfoResponseModel;
  items: ResponseItemModel[];
}
