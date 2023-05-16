import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { EngineeringProjectsComponent } from './components/tenth-grade/engineering-projects.component';
import { PersonalProjectsComponent } from './components/personal-projects/personal-projects.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NinthGradeComponent } from './ninth-grade/ninth-grade.component';
const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'tenth-grade-projects', component: EngineeringProjectsComponent },
  { path: 'personal-projects', component: PersonalProjectsComponent },
  { path: '', component: HomepageComponent },
  { path: 'ninth-grade-projects', component: NinthGradeComponent },
  { path: '**', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
