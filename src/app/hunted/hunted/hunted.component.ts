import { HuntedListService } from './../../services/hunted-list.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { TibiaCharacter } from 'src/app/models/tibia-character.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hunted',
  templateUrl: './hunted.component.html',
  styleUrls: ['./hunted.component.css']
})
export class HuntedComponent implements OnInit, OnDestroy {
  @Input() characterList: TibiaCharacter[];
  activeListSubscription: Subscription;
  activeChar: number;

  constructor(private huntedListService: HuntedListService) {
    this.updateActiveChar();

    this.activeListSubscription = this.huntedListService.activeListChange.subscribe(() => {
      this.updateActiveChar();
    });
  }

  updateActiveChar() {
    const activeHuntedList = this.huntedListService.getActiveList();
    if (activeHuntedList.tibiaCharacters) {
        this.activeChar = activeHuntedList.tibiaCharacters[0].id;
      }
  }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    this.activeListSubscription.unsubscribe();
  }

  tibiaCharClicked(tibiaChar: TibiaCharacter) {
    this.activeChar = tibiaChar.id;
  }

}
