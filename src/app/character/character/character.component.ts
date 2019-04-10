import { HuntedListService } from './../../services/hunted-list.service';
import { TibiaCharacterService } from 'src/app/services/tibia-character.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TibiaCharacter } from 'src/app/models/tibia-character.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  activeCharacterSubscription: Subscription;
  activeListSubscription: Subscription;
  tibiaCharacter: TibiaCharacter;

  constructor(private tibiaCharacterService: TibiaCharacterService, private huntedListService: HuntedListService) {
    this.activeCharacterSubscription = this.tibiaCharacterService.charSelectionChange.subscribe((tibiaCharacter) => {
      this.tibiaCharacter = tibiaCharacter;
    });

    this.activeListSubscription = this.huntedListService.activeListChange.subscribe(() => {
      if (!this.huntedListService.activeList.tibiaCharacters) {
        this.tibiaCharacterService.charSelected = undefined;
        this.tibiaCharacter = undefined;
      }
    });
   }

  ngOnInit() {
  }

}
