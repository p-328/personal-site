import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AboutEngineeringComponent } from './components/about-engineering/about-engineering.component';
import { EngineeringProjectsComponent } from './components/engineering-projects/engineering-projects.component';
import { EngineeringProjectComponent } from './components/engineering-project/engineering-project.component';
import { BalloonCarComponent } from './components/balloon-car/balloon-car.component';
import { CoreldrawKeychainComponent } from './components/coreldraw-keychain/coreldraw-keychain.component';
import { PersonalProjectsComponent } from './components/personal-projects/personal-projects.component';
import { PersonalProjectComponent } from './components/personal-project/personal-project.component';
import { HomepageComponent } from './components/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AboutEngineeringComponent,
    EngineeringProjectsComponent,
    EngineeringProjectComponent,
    BalloonCarComponent,
    CoreldrawKeychainComponent,
    PersonalProjectsComponent,
    PersonalProjectComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
