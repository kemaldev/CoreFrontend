import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HuntedListsComponent } from './hunted-list/hunted-lists/hunted-lists.component';
import { EditCharacterComponent } from './hunted-list/hunted-lists/hunted-list/character/edit-character/edit-character.component';
import { HuntedListComponent } from './hunted-list/hunted-lists/hunted-list/hunted-list.component';
import { HuntedComponent } from './hunted-list/hunted-lists/hunted-list/hunted/hunted.component';
import { EditHuntedListComponent } from './hunted-list/hunted-lists/hunted-list/edit-hunted-list/edit-hunted-list.component';
import { CharacterComponent } from './hunted-list/hunted-lists/hunted-list/character/character.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HuntedListsComponent,
    HuntedListComponent,
    HuntedComponent,
    EditHuntedListComponent,
    CharacterComponent,
    EditCharacterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
