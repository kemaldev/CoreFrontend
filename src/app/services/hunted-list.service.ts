import { Injectable } from '@angular/core';
import { HuntingPlace } from '../models/hunting-place.model';
import { TibiaCharacter } from '../models/tibia-character.model';
import { HuntedList } from '../models/hunted-list.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HuntedListService {
  activeListChange: Subject<HuntedList> = new Subject<HuntedList>();
  private _activeList: HuntedList;
  private _huntedLists: HuntedList[];

  constructor() {
    this._huntedLists = [
      new HuntedList(0, 'Hunted', [
        new TibiaCharacter(
          0,
          'Relentless Rektrim',
          'Elder Druid',
          319,
          'Core',
          'Roshamuul',
          'Relentless Sierska, Bugzy Malone, Yung Raffu',
          true,
          new Date(),
          new Date(),
          [new HuntingPlace(0, 'Library')]
        ),
        new TibiaCharacter(
          1,
          'Test',
          'Master Sorcerer',
          450,
          'Sophisticated Society',
          'Roshamuul',
          'Relentless Sierska, Bugzy Malone, Yung Raffu',
          true,
          new Date(),
          new Date(),
          [new HuntingPlace(0, 'Lolbro')]
        ),
        new TibiaCharacter(
          2,
          'Yung Raffu',
          'Master Sorcerer',
          500,
          'Sophisticated Society',
          'Roshamuul',
          'Relentless Rektrim, Bonezaw, Bugzy Malone',
          false,
          new Date(),
          new Date(),
          [new HuntingPlace(0, 'Yep')]
        )
      ]),
      new HuntedList(1, 'Friends', [
        new TibiaCharacter(
          3,
          'Relentless Sierska',
          'Master Sorcerer',
          340,
          'Core',
          'Roshamuul',
          'Relentless Rektrim, Bonezaw, Alex Flow',
          false,
          new Date(),
          new Date(),
          [new HuntingPlace(1, 'Plague Seal')]
        )
      ])
    ];

    this._activeList = this._huntedLists[0];
  }

  get huntedLists(): HuntedList[] {
    return this._huntedLists;
  }

  addList(listName: string) {
    this._huntedLists.push(
      new HuntedList(
        this._huntedLists[this._huntedLists.length - 1].id + 1,
        listName
      )
    );
  }

  getCharacterWithId(id: number): TibiaCharacter {
    return this._activeList.tibiaCharacters.find(
      character => character.id === id
    );
  }

  getFirstCharacter(): TibiaCharacter {
    return this._activeList.tibiaCharacters[0];
  }

  addCharacterToList(charName: string) {
    if (!this.activeList.tibiaCharacters) {
      this.activeList.tibiaCharacters = [];
    }

    // Will change this later, will be db connected so won't have to think about id's, just hardcoding it for now.
    this.activeList.tibiaCharacters.push(
      new TibiaCharacter(
        10,
        charName,
        'Royal Paladin',
        300,
        'Test',
        'Roshamuul',
        'Asd Asdsson, Ehhh, Gggggg',
        false,
        new Date(),
        new Date(),
        [new HuntingPlace(0, 'Nope')]
      )
    );
  }

  setOnlineCountToHuntedList() {
    for (let huntedList of this._huntedLists) {
      huntedList.amountOnline = this.getOnlineCount(huntedList.tibiaCharacters);
    }
  }

  private getOnlineCount(characterList: TibiaCharacter[]): number {
    return characterList.reduce(
      (charOnline, tibiaChar) =>
        tibiaChar.isOnline ? charOnline + 1 : charOnline,
      0
    );
  }

  removeList(id: number) {
    this._huntedLists.splice(id, 1);
    this.activeList = this._huntedLists[0];
  }

  get activeList(): HuntedList {
    return this._activeList;
  }

  set activeList(activeList: HuntedList) {
    this._activeList = activeList;
    this.activeListChange.next(this._activeList);
  }
}
