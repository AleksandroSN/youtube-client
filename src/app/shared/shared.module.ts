import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { RouterModule } from "@angular/router";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ButtonComponent, RouteLinkComponent } from "./components";
import { ProgressBarColorDirective, SortDirective, LoaderDirective } from "./directives";
import { FilterPipe, SorterPipe } from "./pipes";
import { YoutubeInterceptor } from "./interceptors";

const MaterialsModules = [
  MatToolbarModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatProgressBarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
];

@NgModule({
  declarations: [
    ButtonComponent,
    FilterPipe,
    SorterPipe,
    ProgressBarColorDirective,
    SortDirective,
    RouteLinkComponent,
    LoaderDirective,
  ],
  imports: [MaterialsModules, CommonModule, RouterModule, ReactiveFormsModule],
  providers: [
    MatDatepickerModule,
    { provide: HTTP_INTERCEPTORS, useClass: YoutubeInterceptor, multi: true },
  ],
  exports: [
    MaterialsModules,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ButtonComponent,
    RouteLinkComponent,
    FilterPipe,
    SorterPipe,
    ProgressBarColorDirective,
    SortDirective,
  ],
})
export class SharedModule {}
