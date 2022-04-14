import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SorterComponent } from "./search-filters.component";

describe("SorterComponent", () => {
  let component: SorterComponent;
  let fixture: ComponentFixture<SorterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SorterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SorterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
