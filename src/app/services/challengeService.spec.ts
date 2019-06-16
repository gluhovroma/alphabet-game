import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacabularyService } from '../services/vacabularyService';
import { ChallengeService } from '../services/challengeService';
import { RouterTestingModule } from '@angular/router/testing';

describe('StartPageComponent', () => {

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     providers: [
  //       VacabularyService
  //     ],
  //   })
  //   .compileComponents();
  // }));

  let challengeService: ChallengeService;

  beforeEach(() => { challengeService = new ChallengeService(new VacabularyService()); });

  it('should create', () => {
    expect(challengeService.t).toBe('a');
  });
});

