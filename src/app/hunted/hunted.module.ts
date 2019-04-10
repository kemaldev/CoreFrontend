import { HuntedListsComponent } from './hunted-lists/hunted-lists.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HuntedListComponent } from './hunted-list/hunted-list.component';
import { HuntedComponent } from './hunted/hunted.component';
import { EditHuntedListComponent } from './edit-hunted-list/edit-hunted-list.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HuntedMainComponent } from './hunted-main/hunted-main.component';
import { SharedModule } from 'src/shared/shared.module';
import { CharacterComponent } from '../character/character/character.component';
import { EditCharacterComponent } from '../character/edit-character/edit-character.component';

@NgModule({
  declarations: [
    EditHuntedListComponent,
    HuntedComponent,
    HuntedListComponent,
    HuntedMainComponent,
    HuntedListsComponent,
    CharacterComponent,
    EditCharacterComponent,
  ],
  imports: [
    SharedModule,
    AngularFontAwesomeModule,
    RouterModule.forChild([
      { path: 'list', component: HuntedMainComponent }
    ])
  ]
})
export class HuntedModule { }
