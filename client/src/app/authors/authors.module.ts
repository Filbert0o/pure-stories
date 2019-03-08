import { NgModule } from '@angular/core';

import { AuthorsService } from './authors.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthorsListComponent } from './authors-list/authors-list.component';


@NgModule({
  declarations: [
      AuthorsListComponent
  ],
  imports: [
      CommonModule,
      FormsModule
  ],
  providers: [
      AuthorsService
  ],
})
export class AuthorsModule { }
