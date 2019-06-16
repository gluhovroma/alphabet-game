import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChallengePageComponent } from './challenge-page.component';
import { VacabularyService } from '../../services/vacabularyService/vacabularyService';
import { ChallengeService } from '../../services/challengeService/challengeService';
import { RouterTestingModule } from '@angular/router/testing';
import {DemoMaterialModule} from '../../material-module';
import { VacabularyStorageService } from '../../services/vacabularyService/vacabularyService';
import { StorageServiceModule } from 'ngx-webstorage-service';
describe('ChallengePageComponent', () => {
  let component: ChallengePageComponent;
  let fixture: ComponentFixture<ChallengePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengePageComponent ],
      imports:[RouterTestingModule, FlexLayoutModule, DemoMaterialModule, StorageServiceModule],
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
