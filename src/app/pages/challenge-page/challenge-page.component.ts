import { Component, OnInit } from '@angular/core';
import { ChallengeService, ChallengeStatus } from '../../services/challengeService/challengeService';
import { VacabularyService } from '../../services/vacabularyService/vacabularyService';
import { Router, ActivatedRoute, Params  } from '@angular/router';

@Component({
  selector: 'app-challenge-page',
  templateUrl: './challenge-page.component.html',
  styleUrls: ['./challenge-page.component.scss']
})
export class ChallengePageComponent implements OnInit {
  public letter: string;
  public word: string[];
  public challengeStatuses = ChallengeStatus;
  public challengeStatus: ChallengeStatus;
  public alphabet: string[];

  constructor(
    public vacabularyService: VacabularyService,
    public challengeService: ChallengeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.alphabet = [...this.vacabularyService.getAlphabet()];

    this.route.params.subscribe((params: Params) =>  {
      if (this.alphabet.indexOf(params.letter) === -1) {
        return this.router.navigateByUrl('');
      }
      this.challengeService.newChallenge(params.letter);
    });

    this.challengeService.word.subscribe(word => {
      this.word = word && word.split("");
      console.log(this.word);
    });

    this.challengeService.letter.subscribe(letter => {
      this.letter = letter;
    });

    this.challengeService.status.subscribe(status => {
      this.challengeStatus = status;
    });
  }
  makeChoise(i: number) {
    this.challengeService.makeChoice(i, this.letter);
  }
  newChallenge(letter: string) {
    this.router.navigateByUrl(`challenge/${letter}`);
  }
}
