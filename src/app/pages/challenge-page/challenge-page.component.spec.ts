import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChallengePageComponent } from './challenge-page.component';
import { VacabularyService } from '../../services/vacabularyService/vacabularyService';
import { ChallengeService } from '../../services/challengeService/challengeService';
import { RouterTestingModule } from '@angular/router/testing';
import {DemoMaterialModule} from '../../material-module';
import { VacabularyStorageService } from '../../services/vacabularyService/vacabularyService';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { LetterPresenterComponent } from '../../components/letter-presenter/letter-presenter.component';
import { WordChallengeComponent } from '../../components/word-challenge/word-challenge.component';
import { AlphabetComponent } from '../../components/alphabet/alphabet.component';
describe('ChallengePageComponent', () => {
  let component: ChallengePageComponent;
  let fixture: ComponentFixture<ChallengePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengePageComponent, AlphabetComponent, LetterPresenterComponent, WordChallengeComponent ],
      imports: [ RouterTestingModule, FlexLayoutModule, DemoMaterialModule, StorageServiceModule ],
      providers: [
        VacabularyService,
        ChallengeService,
        VacabularyStorageService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
