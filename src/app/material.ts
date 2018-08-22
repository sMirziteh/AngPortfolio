
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatExpansionModule} from '@angular/material/expansion';







@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,MatToolbarModule, MatMenuModule, MatGridListModule,MatTabsModule, MatProgressBarModule, MatExpansionModule],
  exports: [MatButtonModule, MatCheckboxModule,MatToolbarModule, MatMenuModule, MatGridListModule,MatTabsModule, MatProgressBarModule, MatExpansionModule],
})
export class MaterialModule { }