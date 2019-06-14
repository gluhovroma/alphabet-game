import { Component, OnInit } from '@angular/core';
import { VacabularyService } from '../services/vacabularyService';
import { ChallengeService } from '../services/challengeService';
import { Router, ActivatedRoute  } from '@angular/router';
@Component({
  selector: 'app-challenge-page',
  templateUrl: './challenge-page.component.html',
  styleUrls: ['./challenge-page.component.scss']
})
export class ChallengePageComponent implements OnInit {
  public letter: string;
  public  word: string[];
  public success: string;
  public failed: string;
  constructor(
    public vacabularyService: VacabularyService, 
    public challengeService: ChallengeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.challengeService.newChallenge(this.route.snapshot.paramMap.get('letter'));

    this.challengeService.word.subscribe(word => {
      this.word = word.split("");
      console.log(this.word);
    })

    this.challengeService.letter.subscribe(letter => {
      this.letter = letter;
    })

    this.challengeService.success.subscribe(success => {
      this.success = success;
    })

    this.challengeService.failed.subscribe(failed => {
      this.failed = failed;
    })

    

 

    //console.log(this.id);
  }

  makeChoise(i: number){
    this.challengeService.makeChoice(i, this.letter)
  }

}
