import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { EngineeringProjectsComponent } from './components/tenth-grade/engineering-projects.component';
import { PersonalProjectsComponent } from './components/personal-projects/personal-projects.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NinthGradeComponent } from './ninth-grade/ninth-grade.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EngineeringProjectsComponent,
    PersonalProjectsComponent,
    HomepageComponent,
    NinthGradeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
