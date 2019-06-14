import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { ChallengePageComponent } from './challenge-page/challenge-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';
import { ChallengeService } from './services/challengeService';
import { VacabularyService } from './services/vacabularyService';
@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    ChallengePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FlexLayoutModule 
  ],
  providers: [
    VacabularyService,
    ChallengeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
