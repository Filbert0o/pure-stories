import { NgModule } from '@angular/core';

import { StoriesService } from './stories.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StoriesListComponent } from './stories-list/stories-list.component';


@NgModule({
  declarations: [
      StoriesListComponent
  ],
  imports: [
      CommonModule,
      FormsModule
  ],
  providers: [
      StoriesService
  ],
})
export class StoriesModule { }
