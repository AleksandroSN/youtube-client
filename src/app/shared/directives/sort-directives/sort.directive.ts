import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from "@angular/core";
import { CardsService } from "@app/core/services";
import { SortDirection } from "@app/shared/models";

@Directive({
  selector: "[appSort]",
})
export class SortDirective implements OnInit, OnDestroy {
  sortDirection: SortDirection = "DESC";

  sortParam: string = "";

  @Input() set appSort(param: string) {
    this.sortParam = param;
  }

  constructor(
    private cardService: CardsService,
    private elementRef: ElementRef<HTMLElement>,
    private rerender: Renderer2,
  ) {}

  @HostListener("click")
  onSortData(): void {
    if (this.sortDirection === "ASC") {
      this.sortDirection = "DESC";
      this.cardService.sortBy$.next({
        params: this.sortParam,
        direction: this.sortDirection,
      });
      return;
    }
    if (this.sortDirection === "DESC") {
      this.sortDirection = "ASC";
      this.cardService.sortBy$.next({
        params: this.sortParam,
        direction: this.sortDirection,
      });
    }
  }

  ngOnInit(): void {
    this.rerender.addClass(this.elementRef.nativeElement, "cursor-pointer");
  }

  ngOnDestroy(): void {
    this.cardService.destroy$.next(true);
    this.cardService.destroy$.complete();
  }
}
