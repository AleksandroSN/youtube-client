import { Pipe, PipeTransform } from "@angular/core";
import { ResponseVideoItemModel, SortParamsWithDirection } from "@app/shared";
import { sorterHelper } from "@utils";

@Pipe({
  name: "appSorter",
})
export class SorterPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(items: ResponseVideoItemModel[], sortDir: SortParamsWithDirection | null) {
    if (sortDir) {
      items.sort((a, b) => {
        const { x, y } = sorterHelper(a, b, sortDir);
        if (x < y) {
          return sortDir.direction === "ASC" ? -1 : 1;
        }
        if (x > y) {
          return sortDir.direction === "ASC" ? 1 : -1;
        }
        return 0;
      });
    }
    return items;
  }
}
