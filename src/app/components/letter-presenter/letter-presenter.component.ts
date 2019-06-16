import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-letter-presenter',
  templateUrl: './letter-presenter.component.html',
  styleUrls: ['./letter-presenter.component.scss']
})
export class LetterPresenterComponent implements OnInit {
  @Input() letter: string;
  @Input() language: string;
  constructor() { }

  ngOnInit() {
    console.log(this.letter);
  }

}
