
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressBarModule} from '@angular/material/progress-bar';






@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,MatToolbarModule, MatMenuModule, MatGridListModule,MatTabsModule, MatProgressBarModule],
  exports: [MatButtonModule, MatCheckboxModule,MatToolbarModule, MatMenuModule, MatGridListModule,MatTabsModule, MatProgressBarModule],
})
export class MaterialModule { }