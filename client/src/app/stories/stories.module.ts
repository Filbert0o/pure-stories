import { NgModule } from '@angular/core';

import { StoriesService } from './stories.service';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';


import { StoriesListComponent } from './stories-list/stories-list.component';
import { StoriesDetailComponent } from './stories-detail/stories-detail.component';


@NgModule({
  declarations: [StoriesListComponent, StoriesDetailComponent],
  imports: [
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatChipsModule,
    CommonModule,
    FormsModule
  ],
  providers: [StoriesService]
})
export class StoriesModule {}
