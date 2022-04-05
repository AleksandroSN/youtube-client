import {
  Directive,
  Input,
  ElementRef,
  Renderer2,
  AfterViewInit,
} from "@angular/core";
import { getNumberOfDays } from "@utils";

@Directive({
  selector: "[appProgressBarColor]",
})
export class ProgressBarColorDirective implements AfterViewInit {
  @Input() date: string | null = "";

  constructor(
    private el: ElementRef<HTMLElement>,
    private rerender: Renderer2,
  ) {}

  ngAfterViewInit(): void {
    this.updateColor();
  }

  updateColor(): void {
    const currentDate = new Date();
    const difDay = getNumberOfDays(currentDate, this.date as string);
    if (difDay < 7) {
      this.rerender.addClass(this.el.nativeElement, "blue-progress");
      return;
    }
    if (difDay > 7 && difDay < 30) {
      this.rerender.addClass(this.el.nativeElement, "green-progress");
      return;
    }
    if (difDay > 30 && difDay < 180) {
      this.rerender.addClass(this.el.nativeElement, "yellow-progress");
      return;
    }
    if (difDay > 180) {
      this.rerender.addClass(this.el.nativeElement, "red-progress");
    }
  }
}
