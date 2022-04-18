import { Pipe, PipeTransform } from "@angular/core";
import { ResponseVideoItemModel } from "@app/shared";

@Pipe({
  name: "appFilter",
})
export class FilterPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(items: ResponseVideoItemModel[] | null, searchStr: string) {
    if (!items || null) {
      return [];
    }

    if (!searchStr) {
      return items;
    }

    const lwrCaseSearchStr = searchStr.toLowerCase();

    return items.filter((item) => item.snippet.title.toLowerCase().includes(lwrCaseSearchStr));
  }
}
