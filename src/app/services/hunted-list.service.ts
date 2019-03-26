import { Injectable } from '@angular/core';
import { HuntingPlace } from '../models/hunting-place.model';
import { TibiaCharacter } from '../models/tibia-character.model';
import { HuntedList } from '../models/hunted-list.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HuntedListService {
  activeListChange: Subject<number> = new Subject<number>();
  private _activeList: number;
  private _huntedLists: HuntedList[];

  constructor() {
    this._activeList = 0;
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
          new Date(),
          new Date(),
          [new HuntingPlace(0, 'Lolbro')]
        )
      ]),
      new HuntedList(1, 'Friends', [
        new TibiaCharacter(
          2,
          'Relentless Sierska',
          'Master Sorcerer',
          340,
          'Core',
          'Roshamuul',
          'Relentless Rektrim, Bonezaw, Alex Flow',
          new Date(),
          new Date(),
          [new HuntingPlace(1, 'Plague Seal')]
        )
      ])
    ];
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

  removeList(id: number) {
    console.log('Before ' + this._huntedLists);
    this._huntedLists.splice(id, 1);
    console.log('After ' + this._huntedLists);
    this.activeList = 0;
  }

  getActiveList() {
    return this.huntedLists.find((huntedList) => huntedList.id === this._activeList);
  }

  get activeList(): number {
    return this._activeList;
  }

  set activeList(activeList: number) {
    this._activeList = activeList;
    this.activeListChange.next(this._activeList);
  }
}
