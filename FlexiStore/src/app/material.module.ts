import {MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatCardModule, MatGridListModule, MatSnackBarModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatStepperModule} from '@angular/material/stepper';
import {LayoutModule} from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [  MatTableModule,
              MatDialogModule,
              MatStepperModule,
              MatBadgeModule,
              MatExpansionModule,
              MatGridListModule,
              MatCardModule,
              FlexLayoutModule,
              LayoutModule,
              MatInputModule,
              MatFormFieldModule ,
              MatButtonModule,
              MatListModule,
              MatCheckboxModule,
              MatMenuModule,
              MatToolbarModule,
              MatSidenavModule,
              MatIconModule,
              MatSnackBarModule],
  exports: [  MatTableModule,
              MatDialogModule,
              MatStepperModule,
              MatBadgeModule,
              MatExpansionModule,
              MatGridListModule,
              MatCardModule,
              FlexLayoutModule,
              LayoutModule,
              MatInputModule,
              MatFormFieldModule ,
              MatButtonModule,
              MatListModule,
              MatCheckboxModule,
              MatMenuModule,
              MatToolbarModule,
              MatSidenavModule,
              MatIconModule,
              MatSnackBarModule],
})
export class CustomMaterialModule { }
