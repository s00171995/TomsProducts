import { NgModule } from "@angular/core";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatMenuModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatTabsModule,
  MatListModule,
  MatAutocompleteModule,
  MatSlideToggleModule,
  MatSidenavModule,
} from "@angular/material";
import { MatGridListModule } from "@angular/material/grid-list";
@NgModule({
  imports: [],
  exports: [
    MatButtonModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatSidenavModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  declarations: []
})
export class MaterialModule {}