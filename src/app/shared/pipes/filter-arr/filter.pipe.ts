import { Pipe, PipeTransform } from "@angular/core";
import { ResponseItemModel } from "@app/shared";

@Pipe({
  name: "appFilter",
})
export class FilterPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(items: ResponseItemModel[], searchStr: string) {
    if (!items) {
      return [];
    }

    if (!searchStr) {
      return items;
    }

    const lwrCaseSearchStr = searchStr.toLowerCase();

    return items.filter((item) => item.snippet.title.toLowerCase().includes(lwrCaseSearchStr));
  }
}
