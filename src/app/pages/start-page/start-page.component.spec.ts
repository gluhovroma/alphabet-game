import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StartPageComponent } from './start-page.component';
import { VacabularyService } from '../../services/vacabularyService/vacabularyService';
import { ChallengeService } from '../../services/challengeService/challengeService';
import { RouterTestingModule } from '@angular/router/testing';
import { VacabularyStorageService } from '../../services/vacabularyService/vacabularyService';
import { StorageServiceModule } from 'ngx-webstorage-service';
import {DemoMaterialModule} from '../../material-module';
describe('StartPageComponent', () => {
  let component: StartPageComponent;
  let fixture: ComponentFixture<StartPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartPageComponent ],
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
    fixture = TestBed.createComponent(StartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
