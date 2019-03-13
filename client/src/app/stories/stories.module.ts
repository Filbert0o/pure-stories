import { NgModule } from '@angular/core';

import { StoriesService } from './stories.service';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { StoriesListComponent } from './stories-list/stories-list.component';
import { StoriesDetailComponent, DeleteDialogComponent } from './stories-detail/stories-detail.component';
import { StoriesFormComponent } from './stories-form/stories-form.component';


@NgModule({
  declarations: [
    StoriesListComponent,
    StoriesDetailComponent,
    DeleteDialogComponent,
    StoriesFormComponent
  ],
  entryComponents: [StoriesDetailComponent, DeleteDialogComponent],
  imports: [
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatProgressBarModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StoriesService]
})
export class StoriesModule {}
