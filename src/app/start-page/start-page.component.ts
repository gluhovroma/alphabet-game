import { Component, OnInit } from '@angular/core';
import { VacabularyService } from '../services/vacabularyService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

  constructor(public vacabularyService: VacabularyService, private router: Router) {

   }

  ngOnInit() {

  }

  newChallenge() {
    const letter = this.vacabularyService.getRandomLetter();
    this.router.navigateByUrl(`challenge/${letter}`);

  }

}
