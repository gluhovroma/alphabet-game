import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacabularyService, Laguages, VacabularyStorageService } from './vacabularyService';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { ChallengeService } from '../challengeService/challengeService';


describe('VacabularyService', () => {
  let vacabularyService: VacabularyService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        ChallengeService,
        VacabularyService,
        VacabularyStorageService
      ],
      imports: [
        StorageServiceModule
      ]
    })
    .compileComponents();

    vacabularyService = TestBed.get(VacabularyService);
  }));

  it('default language should be english', () => {
    console.log(vacabularyService.language);
    expect(vacabularyService.language).toBe(Laguages.eng);
  });

  it('It should return alphabet', () => {
    expect(vacabularyService.getAlphabet().length).toBeGreaterThan(0);
  });

  it('It should return alphabet', () => {
    expect(vacabularyService.getAlphabet().length).toBeGreaterThan(0);
  });

  it('It should return random letter', () => {
    expect(vacabularyService.getRandomLetter()).toEqual(jasmine.any(String));
  });

  it('It should return random word', () => {
    expect(vacabularyService.getRandomWord('f')).toEqual(jasmine.any(String));
  });





});
