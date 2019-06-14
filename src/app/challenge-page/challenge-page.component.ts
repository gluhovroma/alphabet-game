import { Component, OnInit } from '@angular/core';
import { VacabularyService } from '../services/vacabularyService';
import { ChallengeService, ChallengeStatus } from '../services/challengeService';
import { Router, ActivatedRoute  } from '@angular/router';
@Component({
  selector: 'app-challenge-page',
  templateUrl: './challenge-page.component.html',
  styleUrls: ['./challenge-page.component.scss']
})
export class ChallengePageComponent implements OnInit {
  public letter: string;
  public  word: string[];
  public challengeStatuses = ChallengeStatus;
  public challengeStatus: ChallengeStatus
  public alphabet: string[];
  constructor(
    public vacabularyService: VacabularyService,
    public challengeService: ChallengeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.alphabet = [...this.vacabularyService.getAlphabet()];

    //this.challengeService.newChallenge(this.route.snapshot.paramMap.get('letter'));

    this.route.params.subscribe( params =>
      this.challengeService.newChallenge(params['letter'])
    )

    this.challengeService.word.subscribe(word => {
      this.word = word.split("");
      console.log(this.word);
    })

    this.challengeService.letter.subscribe(letter => {
      this.letter = letter;
    })

    this.challengeService.status.subscribe(status => {
      this.challengeStatus = status;
      console.log(this.challengeStatus);
      console.log(this.challengeStatuses.new)
    })




    //console.log(this.id);
  }

  makeChoise(i: number){
    this.challengeService.makeChoice(i, this.letter);
  }
  onClickNewWord(letter: string) {

    this.router.navigateByUrl(`challenge/${letter}`);
  }

  startNewChallenge() {

  }

}
