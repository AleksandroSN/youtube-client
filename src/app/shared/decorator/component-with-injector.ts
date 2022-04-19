import { Injector } from "@angular/core";

export interface ComponentWithInjector {
    injector: Injector;
    loader: boolean;
}