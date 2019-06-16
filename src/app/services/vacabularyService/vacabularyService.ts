import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

export enum Laguages {
    ru = 'ru',
    eng = 'eng'
}

export interface VacabularyRecords extends Record<Laguages, string[]> {}

export const alphabets: VacabularyRecords = {
  [Laguages.ru]: 'abcdefghijklmnopqrstuvwxyz'.split(''),
  [Laguages.eng]: 'abcdefghijklmnopqrstuvwxyz'.split('')
};


export const vocabularies: VacabularyRecords = {
  [Laguages.ru]: ["мама","папа"],
  [Laguages.eng]: ['apple',
  'bird',
  'car',
  'dinosaur',
  'elephant',
  'fish',
  'mother',
  'gift',
  'house',
  'icecream',
  'jam',
  'key',
  'lemon',
  'mushroom',
  'notebook',
  'owl',
  'palm',
  'queen',
  'rainbow',
  'sunshine',
  'trees',
  'umbrella',
  'violin',
  'watermelon',
  'xylophone',
  'yacht',
  'zebra']
};
const defaultLanguage = Laguages.eng;

@Injectable()
export class VacabularyStorageService {

    constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
      if (!this.storage.get(StorageKeys.vacabularies)) {
        this.set<VacabularyRecords>(StorageKeys.vacabularies, vocabularies);
      }
      if (!this.storage.get(StorageKeys.alphabets)) {
        this.set<VacabularyRecords>(StorageKeys.alphabets, alphabets);
      }
    }

    public set<T>(key: StorageKeys, data: T): void {
      this.storage.set(key, data);
    }

    public get<T>(key: StorageKeys): T {
      return this.storage.get(key);
    }
}

export enum StorageKeys {
  alphabets = 'alphabets',
  vacabularies = 'vacabularies'
}

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
        const regexp = new RegExp(`[a-zA-Z]*${letter}[a-zA-Z]*`);
        const matchedWords = vocabulary.filter(item => item.match(regexp));
        return matchedWords[Math.floor(Math.random() * matchedWords.length)];
    }

}
