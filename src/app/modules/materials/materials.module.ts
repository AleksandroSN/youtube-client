import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";

const MaterialsModules = [MatToolbarModule];

@NgModule({
  imports: [MaterialsModules],
  exports: [MaterialsModules],
})
export class SharedModule {}
