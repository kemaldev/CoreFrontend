import { HuntedListService } from 'src/app/services/hunted-list.service';
import { HuntedList } from 'src/app/models/hunted-list.model';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

declare let jQuery: any;

@Component({
  selector: 'app-edit-hunted-list',
  templateUrl: './edit-hunted-list.component.html',
  styleUrls: ['./edit-hunted-list.component.css']
})
export class EditHuntedListComponent implements OnInit {
  @ViewChild('modal') modal: ElementRef;
  @Input() huntedList: HuntedList;
  activeListSubscription: Subscription;
  errorMessage = false;
  showGuildAdd = false;
  showCharacterAdd = false;
  showEditList = false;

  constructor(private huntedListService: HuntedListService) {
    // If user chooses to show another list we don't want the previous edit fields to be visible.
    this.activeListSubscription = this.huntedListService.activeListChange.subscribe(() => {
      this.errorMessage = false;
      this.showGuildAdd = false;
      this.showCharacterAdd = false;
      this.showEditList = false;
    });
   }

  ngOnInit() {
  }

  deleteButtonClicked() {
    jQuery(this.modal.nativeElement).modal('show');
  }

  addGuildClicked() {
    if (this.showGuildAdd) {
      this.showGuildAdd = false;
      this.showCharacterAdd = false;
      this.showEditList = false;
      this.errorMessage = false;
    } else {
      this.showGuildAdd = true;
      this.showEditList = false;
      this.showCharacterAdd = false;
    }
  }

  addCharacterClicked() {
    if (this.showCharacterAdd) {
      this.showCharacterAdd = false;
      this.showGuildAdd = false;
      this.showEditList = false;
      this.errorMessage = false;
    } else {
      this.showGuildAdd = false;
      this.showEditList = false;
      this.showCharacterAdd = true;
    }
  }

  editButtonClicked() {
    if (this.showEditList) {
      this.showCharacterAdd = false;
      this.showGuildAdd = false;
      this.showEditList = false;
      this.errorMessage = false;
    } else {
      this.showCharacterAdd = false;
      this.showGuildAdd = false;
      this.showEditList = true;
    }
  }

  onCharacterAdd(form: NgForm) {
    if (form.valid) {
      const characterName = form.value.characterAdd;
      this.huntedListService.addCharacterToList(characterName);
      this.errorMessage = false;
    } else {
      this.errorMessage = true;
    }
  }

  onListEdit(form: NgForm) {
    if(form.valid) {
      const listName = form.value.listName;
      this.huntedListService.activeList.name = listName;
    }
  }

  deleteList(huntedList: HuntedList) {
    this.huntedListService.removeList(huntedList.id);
    jQuery(this.modal.nativeElement).modal('toggle');
  }

  onGuildAdd(form: NgForm) {
    if(form.valid) {
      let guild = form.value.guildAdd;
      // call api to get list of characters to push to the list.
      // push all the gotten characters to the list.
      console.log('addGuildToList() called' + '\n value: ' + guild);
      this.errorMessage = false;
    } else {
      this.errorMessage = true;
    }
  }

}
