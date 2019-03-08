import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthorsService, IAuthor } from '../authors.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html'
  // styleUrls: ['./authors-list.component.css']
})
export class AuthorsListComponent implements OnInit, OnDestroy {
  authors: IAuthor[];
  constructor(
    private authorsService: AuthorsService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log('Init in AuthorsList');
    // this.authorsService.getAuthors()
    //   .subscribe(
    //     (authors) => this.authors = authors
    //   );
    // this.authors = this.authorsService.getAuthors();
  }

  ngOnDestroy(): void {
    console.log('Destroy on AuthorsList');
  }
}
