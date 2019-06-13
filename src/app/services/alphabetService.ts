import {Injectable} from '@angular/core';
import {Observable, Subject, BehaviorSubject} from 'rxjs';

const alphabet = [
    {

    },
    {

    }
]

interface Letter {
    id: string;
    imgPath: string;
}

@Injectable()
export class AlphabetService {
    private letter: BehaviorSubject<string> = new BehaviorSubject<string>("");
    
    changeLetter(letter: string): void {
        this.letter.next(letter);
    }
}

@Injectable()
export class ChallengeService {

    private word: BehaviorSubject<string> = new BehaviorSubject<string>("");
    private success: BehaviorSubject<string> = new BehaviorSubject<string>("");
    private failed: BehaviorSubject<string> = new BehaviorSubject<string>("");

    startChallenge(letter: string): void {
        this.success.next("");
        this.failed.next("");
        this.word.next("word");
    }

    makeChoice(index: number, letter: string) {
        const word= this.word.getValue();
        if (word[index] === letter) {
            this.success.next("Success")
        } else {
            this.success.next("Failed")
        }
    }
}