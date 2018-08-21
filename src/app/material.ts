
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';





@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,MatToolbarModule, MatMenuModule, MatGridListModule,MatTabsModule],
  exports: [MatButtonModule, MatCheckboxModule,MatToolbarModule, MatMenuModule, MatGridListModule,MatTabsModule],
})
export class MaterialModule { }