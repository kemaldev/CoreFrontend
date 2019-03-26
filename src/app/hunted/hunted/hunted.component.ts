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
    this.updateActiveChar(0);

    this.activeListSubscription = this.huntedListService.activeListChange.subscribe(
      () => {
        this.updateActiveChar(0);
      }
    );
  }

  updateActiveChar(index: number) {
    const activeHuntedList = this.huntedListService.activeList;
    if (activeHuntedList.tibiaCharacters) {
      this.tibiaCharacterService.charSelected = activeHuntedList.tibiaCharacters[index];
      this.activeChar = activeHuntedList.tibiaCharacters[index];
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
