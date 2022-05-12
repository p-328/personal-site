import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AboutEngineeringComponent } from './components/about-engineering/about-engineering.component';
import { EngineeringProjectsComponent } from './components/engineering-projects/engineering-projects.component';
import { BalloonCarComponent } from './components/balloon-car/balloon-car.component';
import { CoreldrawKeychainComponent } from './components/coreldraw-keychain/coreldraw-keychain.component';
import { PersonalProjectsComponent } from './components/personal-projects/personal-projects.component';
import { HomepageComponent } from './components/homepage/homepage.component';
const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'about-engineering', component: AboutEngineeringComponent },
  { path: 'engineering-projects', component: EngineeringProjectsComponent },
  { path: 'balloon-car', component: BalloonCarComponent },
  { path: 'coreldraw-keychain', component: CoreldrawKeychainComponent },
  { path: 'personal-projects', component: PersonalProjectsComponent },
  { path: '', component: HomepageComponent },
  { path: '**', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
