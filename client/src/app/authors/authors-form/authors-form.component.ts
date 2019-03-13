import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthorsService, IAuthor } from '../authors.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-authors-form',
  templateUrl: './authors-form.component.html',
  styleUrls: ['./authors-form.component.scss']
})
export class AuthorsFormComponent implements OnInit {
  author: IAuthor;

  nameFormGroup: FormGroup;
  avatarFormGroup: FormGroup;
  genderFormGroup: FormGroup;
  birthdateFormGroup: FormGroup;
  descriptionFormGroup: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private authorsService: AuthorsService,
    private router: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    console.log('Init in AuthorsForm');

    this.nameFormGroup = this.formBuilder.group({
      nameControl: ['', Validators.required]
    });
    this.avatarFormGroup = this.formBuilder.group({});
    this.genderFormGroup = this.formBuilder.group({});
    this.birthdateFormGroup = this.formBuilder.group({});
    this.descriptionFormGroup = this.formBuilder.group({});

    this.author = {
      _id: '',
      name: '',
      gender: '',
      birthdate: '',
      description: '',
      avatar: ''
    };
  }

  addAuthor() {
    if (!this.formValid()) {
      this.toastr.error('Form Invalid');
      return;
    }
    this.authorsService.addAuthor(this.author).subscribe(author => {
      this.toastr.success(`${author.name} Saved!`);
      this.router.navigate(['authors']);
    });
  }

  private formValid(): boolean {
    return this.author.name ? true : false;
  }
}
