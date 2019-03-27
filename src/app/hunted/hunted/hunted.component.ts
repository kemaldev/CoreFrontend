import { HuntedListService } from './../../services/hunted-list.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { TibiaCharacter } from 'src/app/models/tibia-character.model';
import { Subscription } from 'rxjs';
import { TibiaCharacterService } from 'src/app/services/tibia-character.service';

@Component({
  selector: 'app-hunted',
  templateUrl: './hunted.component.html',
  styleUrls: ['./hunted.component.css']
})
export class HuntedComponent implements OnInit, OnDestroy {
  @Input() characterList: TibiaCharacter[];
  activeListSubscription: Subscription;
  activeChar: TibiaCharacter;

  constructor(
    private huntedListService: HuntedListService,
    private tibiaCharacterService: TibiaCharacterService
  ) {
    // If user switches between hunting lists we want it to automatically select the first character in the HuntedList.
    this.updateActiveCharToFirst();

    this.activeListSubscription = this.huntedListService.activeListChange.subscribe(
      () => {
        this.updateActiveCharToFirst();
      }
    );
  }

  updateActiveCharToFirst() {
    const tibiaChar: TibiaCharacter = this.huntedListService.getFirstCharacter();
    this.tibiaCharacterService.charSelected = tibiaChar;
    this.activeChar = tibiaChar;
  }

  updateActiveChar(id: number) {
    const activeHuntedList = this.huntedListService.activeList;
    if (activeHuntedList.tibiaCharacters) {
      const character: TibiaCharacter = this.huntedListService.getCharacterWithId(id);
      this.tibiaCharacterService.charSelected = character;
      this.activeChar = character;
    }
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.activeListSubscription.unsubscribe();
  }

  tibiaCharClicked(tibiaChar: TibiaCharacter) {
    this.updateActiveChar(tibiaChar.id);
  }
}
