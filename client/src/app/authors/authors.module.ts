import { NgModule } from '@angular/core';

import { AuthorsService } from './authors.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AuthorsListComponent } from './authors-list/authors-list.component';
import { AuthorsFormComponent } from './authors-form/authors-form.component';

@NgModule({
  declarations: [AuthorsListComponent, AuthorsFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatCardModule,
    MatIconModule,
    MatStepperModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  providers: [AuthorsService]
})
export class AuthorsModule {}
