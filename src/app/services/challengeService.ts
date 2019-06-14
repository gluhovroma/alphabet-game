import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {VacabularyService} from './vacabularyService';

@Injectable()
export class ChallengeService {
    public letter: BehaviorSubject<string> = new BehaviorSubject<string>("");
    public word: BehaviorSubject<string> = new BehaviorSubject<string>("");
    public success: BehaviorSubject<string> = new BehaviorSubject<string>("");
    public failed: BehaviorSubject<string> = new BehaviorSubject<string>("");

    constructor(private vacabularyService: VacabularyService) {

    }

    public newChallenge(letter: string): void {
        this.success.next("");
        this.failed.next("");
        this.setLetter(letter);
        const word = this.vacabularyService.getRandomWord(letter)
        this.setWord(word);
    }

    public getImgPath(letter: string) {
        return `${letter}.png`
    }

    private setWord(word: string): void {       
        this.word.next(word);
    }

    private setLetter(letter: string): void {
        this.letter.next(letter);
    }

    public makeChoice(index: number, letter: string) {
        const word= this.word.getValue();
        if (word[index] === letter) {
            this.success.next("Success")
            console.log("Success");
        } else {
            this.success.next("Failed")
            console.log("SucFailedcess");
        }

    }
}