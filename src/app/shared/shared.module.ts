import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatToolbarModule } from "@angular/material/toolbar";
import { ButtonComponent } from "./components";
import { ProgressBarColorDirective, SortDirective } from "./directives";
import { FilterPipe } from "./pipes";

const MaterialsModules = [
  MatToolbarModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatProgressBarModule,
];

@NgModule({
  declarations: [
    ButtonComponent,
    FilterPipe,
    ProgressBarColorDirective,
    SortDirective,
  ],
  imports: [MaterialsModules, CommonModule],
  exports: [
    MaterialsModules,
    CommonModule,
    ButtonComponent,
    FilterPipe,
    ProgressBarColorDirective,
    SortDirective,
  ],
})
export class SharedModule {}
