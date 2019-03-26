import { HuntedListService } from './../../services/hunted-list.service';
import { HuntedList } from './../../models/hunted-list.model';
import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Subscription, Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-hunted-lists',
  templateUrl: './hunted-lists.component.html',
  styleUrls: ['./hunted-lists.component.css']
})
export class HuntedListsComponent implements OnInit, OnDestroy {
  huntedLists: HuntedList[] = [];
  huntedListName: string;
  activeList: number;
  activeListSubscription: Subscription;
  showTextBox = false;
  errorMessage = false;

  constructor(private huntedListService: HuntedListService) {
    this.activeList = this.huntedListService.activeList;
    this.activeListSubscription = this.huntedListService.activeListChange.subscribe((activeList) => {
      this.huntedLists = this.huntedListService.huntedLists;
      this.activeList = activeList;
    });
  }

  huntedListClicked(huntedList: HuntedList) {
    this.huntedListService.activeList = huntedList.id;
  }

  addListClicked() {
    if (this.showTextBox) {
      if (this.huntedListName) {
        this.huntedListService.addList(this.huntedListName);
        this.huntedListName = '';
        this.showTextBox = false;
        this.errorMessage = false;
      } else {
        this.errorMessage = true;
      }
    } else {
      this.showTextBox = true;
    }
  }

  ngOnDestroy(): void {
    this.activeListSubscription.unsubscribe();
  }

  ngOnInit() {
    this.huntedLists = this.huntedListService.huntedLists;
  }
}
