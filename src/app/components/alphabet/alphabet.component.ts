import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.scss']
})
export class AlphabetComponent implements OnInit {
  @Input() alphabet: string[];
  @Output() onClickLetter = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  clickLetter(letter: string) {
    this.onClickLetter.emit(letter);
  }

}
