import { VacabularyService,  Laguages } from '../services/vacabularyService';
// Straight Jasmine testing without Angular's testing support
describe('VacabularyService', () => {
  let vacabularyService: VacabularyService;
  beforeEach(() => { vacabularyService = new VacabularyService(); });

  it('default language should be english', () => {
    expect(vacabularyService.language).toBe(Laguages.eng);
  });
});
