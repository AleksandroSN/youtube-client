import {
  Directive,
  Input,
  ElementRef,
  Renderer2,
  AfterContentInit,
} from "@angular/core";
import { getNumberOfDays } from "@utils";

@Directive({
  selector: "[appProgressBarColor]",
})
export class ProgressBarColorDirective implements AfterContentInit {
  @Input() date: string | null = "";

  constructor(
    private el: ElementRef<HTMLElement>,
    private rerender: Renderer2,
  ) {}

  ngAfterContentInit(): void {
    console.log(this.date);
    this.updateColor();
  }

  updateColor(): void {
    const currentDate = new Date();
    const difDay = getNumberOfDays(currentDate, this.date ?? "");
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
