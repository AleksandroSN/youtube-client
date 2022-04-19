import { CardsService } from "@app/core/services";
import { Subject, takeUntil } from "rxjs";
import { Type } from "@angular/core";
import { ComponentWithInjector } from "./component-with-injector";

export function LoaderDecorator() {
  return function <T extends Type<ComponentWithInjector>>(target: T) {
    return class extends target {

      destroy$ = new Subject<boolean>();

      subscribeOnStatusLoad() {
        this.injector.get(CardsService).isLoad$.pipe(takeUntil(this.destroy$)).subscribe((load) => {
          console.log("LoaderDecorator subscribeOnStatusLoad", load);
          this.loader = load;
        });
      }

      ngOnInitDecorated(): void {
        this.loader = true;
        console.log("LoaderDecorator ngOnInit");
        this.subscribeOnStatusLoad();
      }

      ngOnDestroyDecorated(): void {
        console.log("LoaderDecorator ngOnDestroy");
        this.destroy$.next(true);
        this.destroy$.complete();
      }
    };
  };
}
