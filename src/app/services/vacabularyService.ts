import {Injectable, IterableDiffers} from '@angular/core';

enum Laguages {
    ru = 'ru',
    eng = 'eng'
}

const alphabets = {
    [Laguages.ru]: 'abcdefghijklmnopqrstuvwxyz'.split(''),
    [Laguages.eng]: 'abcdefghijklmnopqrstuvwxyz'.split('')
}


const vocabularies = {
    [Laguages.ru]: ["мама","папа"],
    [Laguages.eng]: ['mother', "father", "mom", "om", "main"]
}

const defaultLanguage = Laguages.eng;

@Injectable()
export class VacabularyService {
    
    public language: Laguages;
    public alphabets = alphabets;  
    public vocabularies = vocabularies;
    constructor() {
        this.language = defaultLanguage;
    }

    getAlphabet(): string[] {
        return this.alphabets[this.language];
    }

    getRandomLetter(): string {
        const alphabet = this.alphabets[this.language];        
        return alphabet[Math.floor(Math.random() * alphabet.length)];
    }

    getRandomWord(letter: string): string {
        const vocabulary = this.vocabularies[this.language];
        var regexp = new RegExp("[a-zA-Z]*" + letter + "[a-zA-Z]*");
        const matchedWords = vocabulary.filter(item => item.match(regexp))
        return matchedWords[Math.floor(Math.random() * matchedWords.length)];
    }
  
}