import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChallengeStatus } from '../../services/challengeService/challengeService'
@Component({
  selector: 'app-word-challenge',
  templateUrl: './word-challenge.component.html',
  styleUrls: ['./word-challenge.component.scss']
})
export class WordChallengeComponent implements OnInit {
  @Input() challengeStatus: ChallengeStatus;
  @Input() letter: string;
  @Input() word: string;
  @Output() onMakeChoice = new EventEmitter<boolean>();
  public selectedIndex: number;
  challengeStatuses = ChallengeStatus;

  constructor() { }

  ngOnInit() {

  }

  public makeChoice(i) {
    console.log(i);
    this.selectedIndex = i;
    this.onMakeChoice.emit(i);
  }

}
