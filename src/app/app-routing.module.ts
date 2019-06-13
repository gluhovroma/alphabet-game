import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartPageComponent } from './start-page/start-page.component';
import { ChallengePageComponent } from './challenge-page/challenge-page.component';
const routes: Routes = [
  { path: '', component: StartPageComponent},
  { path: 'challenge/:letter', component: ChallengePageComponent},
  { path: '',   redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
