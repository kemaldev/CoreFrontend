import { TestBed } from '@angular/core/testing';
import { TibiaCharacterService } from './tibia-character.service';

describe('TibiaCharacterServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TibiaCharacterService = TestBed.get(TibiaCharacterService);
    expect(service).toBeTruthy();
  });
});
