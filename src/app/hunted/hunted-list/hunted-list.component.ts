import { TibiaCharacter } from 'src/app/models/tibia-character.model';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy, Output, ViewChild, ElementRef } from '@angular/core';
import { HuntedListService } from 'src/app/services/hunted-list.service';
import { HuntedList } from 'src/app/models/hunted-list.model';

@Component({
  selector: 'app-hunted-list',
  templateUrl: './hunted-list.component.html',
  styleUrls: ['./hunted-list.component.css']
})
export class HuntedListComponent implements OnInit, OnDestroy {
  @Output() huntedList: HuntedList;
  activeListSubscription: Subscription;
  characterList: TibiaCharacter[];

  constructor(private huntedListService: HuntedListService) {
    this.updateCharacterList();
    this.activeListSubscription = this.huntedListService.activeListChange.subscribe(() => {
      this.updateCharacterList();
    });
  }

  updateCharacterList() {
    this.huntedList = this.huntedListService.getActiveList();
    this.characterList = this.huntedList.tibiaCharacters;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.activeListSubscription.unsubscribe();
  }
}
