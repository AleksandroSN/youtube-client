import { Component, Injector, OnDestroy, OnInit } from "@angular/core";
import { LoaderDecorator } from "../../../shared/decorator/loader-decorator";

@Component({
  selector: "app-detail-page",
  templateUrl: "./detail-page.component.html",
  styleUrls: ["./detail-page.component.scss"],
})

@LoaderDecorator()
export class DetailPageComponent implements OnInit, OnDestroy {

  loader = false;
  constructor(public injector: Injector) {}
  
  ngOnInit() {
    this.ngOnInitDecorated();
  }

  ngOnDestroy() {
    this.ngOnDestroyDecorated();
  }

  ngOnInitDecorated() {}
  ngOnDestroyDecorated() {}
}
