import { Injectable } from '@angular/core';
import { TibiaCharacter } from '../models/tibia-character.model';

@Injectable({
  providedIn: 'root'
})
export class TibiaCharacterService {

  tibiaCharacter: TibiaCharacter;
  constructor() { }
}
