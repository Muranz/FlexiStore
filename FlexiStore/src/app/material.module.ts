import {MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatCardModule, MatGridListModule, MatSnackBarModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {LayoutModule} from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [  MatGridListModule,
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
  exports: [  MatGridListModule,
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
