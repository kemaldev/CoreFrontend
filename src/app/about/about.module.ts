import { AboutComponent } from './about.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'about', component: AboutComponent }
    ])
  ]
})
export class AboutModule { }
