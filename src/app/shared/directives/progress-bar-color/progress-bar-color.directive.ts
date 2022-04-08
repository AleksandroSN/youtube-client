import {
  Directive, Input, ElementRef, Renderer2, AfterContentInit,
} from "@angular/core";
import {
  BORDER_BOTTOM_BLUE,
  BORDER_BOTTOM_GREEN,
  BORDER_BOTTOM_RED,
  BORDER_BOTTOM_YELLOW,
  getNumberOfDays,
  HALF_YEAR,
  MONTH,
  WEEK,
} from "@utils";

@Directive({
  selector: "[appProgressBarColor]",
})
export class ProgressBarColorDirective implements AfterContentInit {
  @Input() date: string | null = "";

  constructor(private el: ElementRef<HTMLElement>, private rerender: Renderer2) {}

  ngAfterContentInit(): void {
    this.updateColor();
  }

  updateColor(): void {
    const currentDate = new Date();
    const difDay = getNumberOfDays(currentDate, this.date ?? "");
    if (difDay < WEEK) {
      this.rerender.addClass(this.el.nativeElement, BORDER_BOTTOM_BLUE);
      return;
    }
    if (difDay > WEEK && difDay < MONTH) {
      this.rerender.addClass(this.el.nativeElement, BORDER_BOTTOM_GREEN);
      return;
    }
    if (difDay > MONTH && difDay < HALF_YEAR) {
      this.rerender.addClass(this.el.nativeElement, BORDER_BOTTOM_YELLOW);
      return;
    }
    if (difDay > HALF_YEAR) {
      this.rerender.addClass(this.el.nativeElement, BORDER_BOTTOM_RED);
    }
  }
}
