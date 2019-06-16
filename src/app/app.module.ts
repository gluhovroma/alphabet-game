import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { ChallengePageComponent } from './pages/challenge-page/challenge-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { VacabularyStorageService } from './services/vacabularyService/vacabularyService';
import { ChallengeService } from './services/challengeService/challengeService';
import { VacabularyService } from './services/vacabularyService/vacabularyService';
import { LetterPresenterComponent } from './components/letter-presenter/letter-presenter.component';
import { WordChallengeComponent } from './components/word-challenge/word-challenge.component';
import { AlphabetComponent } from './components/alphabet/alphabet.component';
@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    ChallengePageComponent,
    LetterPresenterComponent,
    WordChallengeComponent,
    AlphabetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FlexLayoutModule,
    StorageServiceModule,
  ],
  providers: [
    VacabularyStorageService,
    VacabularyService,
    ChallengeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
