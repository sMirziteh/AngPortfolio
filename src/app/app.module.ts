import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from './material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import { DashComponent } from './dash/dash.component';
import { ResumeComponent } from './resume/resume.component';
import { TskillsComponent } from './tskills/tskills.component';
import { CskillsComponent } from './cskills/cskills.component';
import { EduComponent } from './edu/edu.component';
import { AwardsComponent } from './awards/awards.component';
import { ExpComponent } from './exp/exp.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashComponent,
    ResumeComponent,
    TskillsComponent,
    CskillsComponent,
    EduComponent,
    AwardsComponent,
    ExpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
