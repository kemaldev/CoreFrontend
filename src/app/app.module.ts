import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HuntedListsComponent } from './hunted/hunted-lists/hunted-lists.component';
import { HuntedListComponent } from './hunted/hunted-list/hunted-list.component';
import { HuntedComponent } from './hunted/hunted/hunted.component';
import { EditHuntedListComponent } from './hunted/edit-hunted-list/edit-hunted-list.component';
import { CharacterComponent } from './character/character/character.component';
import { EditCharacterComponent } from './character/edit-character/edit-character.component';

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
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
