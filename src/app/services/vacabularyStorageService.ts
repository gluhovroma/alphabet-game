import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { VacabularyRecords, vocabularies, alphabets } from './vacabularyService';

export enum StorageKeys {
  alphabets = 'alphabets',
  vacabularies = 'vacabularies'
}

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
