import {Injectable, IterableDiffers} from '@angular/core';
import { VacabularyStorageService, StorageKeys } from './vacabularyStorageService';
export enum Laguages {
    ru = 'ru',
    eng = 'eng'
}

export const alphabets: VacabularyRecords = {
  [Laguages.ru]: 'abcdefghijklmnopqrstuvwxyz'.split(''),
  [Laguages.eng]: 'abcdefghijklmnopqrstuvwxyz'.split('')
}


export const vocabularies: VacabularyRecords = {
  [Laguages.ru]: ["мама","папа"],
  [Laguages.eng]: ['mother', "father", "mom", "om", "main"]
};

export interface VacabularyRecords extends Record<Laguages, string[]> {}

const defaultLanguage = Laguages.eng;

@Injectable()
export class VacabularyService {
    public language: Laguages;
    public alphabets: VacabularyRecords;
    public vocabularies: VacabularyRecords;
    constructor(private vacabularyStorageService: VacabularyStorageService) {
        this.language = defaultLanguage;
        this.alphabets = this.vacabularyStorageService.get<VacabularyRecords>(StorageKeys.alphabets);
        this.vocabularies = this.vacabularyStorageService.get<VacabularyRecords>(StorageKeys.vacabularies);
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
