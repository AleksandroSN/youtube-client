import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from "@angular/core";
import { FiltersService } from "@app/core/services";
import { SortDirection } from "@app/shared/models";

@Directive({
  selector: "[appSort]",
})
export class SortDirective implements OnInit {
  sortDirection: SortDirection = "DESC";

  sortParam: string = "";

  @Input() set appSort(param: string) {
    this.sortParam = param;
  }

  constructor(
    private filtersService: FiltersService,
    private elementRef: ElementRef<HTMLElement>,
    private rerender: Renderer2,
  ) {}

  @HostListener("click")
  onSortData(): void {
    if (this.sortDirection === "ASC") {
      this.sortDirection = "DESC";
      this.filtersService.sortBy$.next({
        params: this.sortParam,
        direction: this.sortDirection,
      });
      return;
    }
    if (this.sortDirection === "DESC") {
      this.sortDirection = "ASC";
      this.filtersService.sortBy$.next({
        params: this.sortParam,
        direction: this.sortDirection,
      });
    }
  }

  ngOnInit(): void {
    this.rerender.addClass(this.elementRef.nativeElement, "cursor-pointer");
  }
}
