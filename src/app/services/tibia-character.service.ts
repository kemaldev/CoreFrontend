import { Injectable } from '@angular/core';
import { TibiaCharacter } from '../models/tibia-character.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TibiaCharacterService {

  charSelectionChange: Subject<TibiaCharacter> = new Subject<TibiaCharacter>();
  _charSelected: TibiaCharacter;
  tibiaCharacter: TibiaCharacter;


  get charSelected(): TibiaCharacter {
    return this._charSelected;
  }

  set charSelected(selectedChar: TibiaCharacter) {
    this._charSelected = selectedChar;
    this.charSelectionChange.next(this._charSelected);
  }

  constructor() { }
}
