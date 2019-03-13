import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthorsService, IAuthor } from '../authors.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss']
})
export class AuthorsListComponent implements OnInit, OnDestroy {
  authors: IAuthor[];
  author: IAuthor;
  spinValue: number;
  isLoading = true;

  constructor(private authorsService: AuthorsService, private router: Router, private toastr: ToastrService) {}

  ngOnInit() {
    console.log('Init in AuthorsList');
    this.getAuthors();
  }

  getAuthors() {
    this.authorsService.getAuthors().subscribe(authors => {
      this.authors = authors;
      this.spinValue = authors.length;
      this.isLoading = false;
    });
  }

  goToDetail(id: string): void {
    this.router.navigate([`authors/${id}`]);
  }

  goToAdd(): void {
    this.router.navigate(['authors/form']);
  }

  deleteAuthor(author: IAuthor) {
    this.authorsService.deleteAuthor(author).subscribe(() => {
      this.author = author;
      this.toastr.success(`Deleted ${author.name}`);
      this.getAuthors();
    });
  }

  ngOnDestroy(): void {
    console.log('Destroy on AuthorsList');
  }
}
