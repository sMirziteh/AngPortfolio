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
import { EduComponent } from './edu/edu.component';
import { AwardsComponent } from './awards/awards.component';
import { ExpComponent } from './exp/exp.component';
import { SkillsComponent } from './skills/skills.component';
import { BioComponent } from './bio/bio.component';
import { PicsComponent } from './pics/pics.component';
import { HistoryComponent } from './history/history.component';
import { IntrestsComponent } from './intrests/intrests.component';
import { GoalsComponent } from './goals/goals.component';
import { ReadingComponent } from './reading/reading.component';
import { SummaryComponent } from './summary/summary.component';
import { ProjectsComponent } from './projects/projects.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashComponent,
    ResumeComponent,
    TskillsComponent,
    EduComponent,
    AwardsComponent,
    ExpComponent,
    SkillsComponent,
    BioComponent,
    PicsComponent,
    HistoryComponent,
    IntrestsComponent,
    GoalsComponent,
    ReadingComponent,
    SummaryComponent,
    ProjectsComponent
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
