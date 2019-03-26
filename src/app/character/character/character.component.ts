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
  tibiaCharacter: TibiaCharacter;

  constructor(private tibiaCharacterService: TibiaCharacterService) {
    this.activeCharacterSubscription = this.tibiaCharacterService.charSelectionChange.subscribe((tibiaCharacter) => {
      this.tibiaCharacter = tibiaCharacter;
    });
   }

  ngOnInit() {
  }

}
