import { ResponseItemModel, SortParamsWithDirection } from "@app/shared";

export const sorterHelper = (
  a: ResponseItemModel,
  b: ResponseItemModel,
  sortDir: SortParamsWithDirection,
) => {
  let x = 0;
  let y = 0;
  if (sortDir.params === "publishedAt") {
    x = new Date(a.snippet[sortDir.params]).getTime();
    y = new Date(b.snippet[sortDir.params]).getTime();
  } else if (sortDir.params === "viewCount") {
    x = +a.statistics[sortDir.params];
    y = +b.statistics[sortDir.params];
  }
  return { x, y };
};
