import { async, TestBed } from '@angular/core/testing';

import { VacabularyService } from '../vacabularyService/vacabularyService';
import { VacabularyStorageService } from '../vacabularyStorageService/vacabularyStorageService';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { ChallengeService, ChallengeStatus } from '../challengeService/challengeService';

describe('ChallengeService', () => {

  let challengeService: ChallengeService;

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

    challengeService = TestBed.get(ChallengeService);
  }));

  it('it should set letter', (done) => {
    challengeService.setLetter('l');
    challengeService.letter.subscribe(letter => {
      expect(letter).toBe('l');
      done();
    });
  });

  it('it should set word', (done) => {
    challengeService.setWord('test');
    challengeService.word.subscribe(word => {
      expect(word).toBe('test');
      done();
    });
  });

  it('it should change letter when challenge start', (done) => {
    challengeService.newChallenge('m');
    challengeService.letter.subscribe(letter => {
      expect(letter).toBe('m');
      done();
    });
  });

  it('word should be not empty when challenge start', (done) => {
    challengeService.newChallenge('m');
    challengeService.word.subscribe(word => {
      expect(word).not.toBe('');
      done();
    });
  });

  it('word should contain selected letter when challenge start', (done) => {
    const letter = 'm';
    challengeService.newChallenge(letter);
    challengeService.word.subscribe(word => {
      expect(word).toContain(letter);
      done();
    });
  });

  it('status should be new when challenge start', (done) => {
    const letter = 'm';
    challengeService.newChallenge(letter);
    challengeService.status.subscribe(status => {
      expect(status).toBe(ChallengeStatus.new);
      done();
    });
  });

  it('It should set result success on correct choice', (done) => {
    const letter = 't';
    const word = 'test';
    challengeService.setWord(word);
    challengeService.makeChoice(0, letter);
    challengeService.status.subscribe(status => {
      expect(status).toBe(ChallengeStatus.success);
      done();
    });
  });

  it('It should set result failed on wrong choice', (done) => {
    const letter = 't';
    const word = 'test';
    challengeService.setWord(word);
    challengeService.makeChoice(1, letter);
    challengeService.status.subscribe(status => {
      expect(status).toBe(ChallengeStatus.failed);
      done();
    });
  });



});

