import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StoriesService, IStory } from '../stories.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-stories-form',
  templateUrl: './stories-form.component.html',
  styleUrls: ['./stories-form.component.scss']
})
export class StoriesFormComponent implements OnInit {
  @Input() storyId: string;
  story: IStory;

  authorFormControl = new FormControl('', [ Validators.required ]);
  titleFormControl = new FormControl('', [Validators.required]);
  storyFormControl = new FormControl('', [Validators.required]);

  constructor(
    private route: ActivatedRoute,
    private storiesService: StoriesService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    // const id: string = this.route.snapshot.paramMap.get('storyId');
    console.log('Init in StoriesForm');
    if (this.storyId) {
      this.storiesService
        .getStoryById(this.storyId)
        .subscribe(story => (this.story = story));
    } else {
      this.story = {
        _id: '',
        category: [],
        author: '',
        title: '',
        bodyText: '',
        favorite: '',
        thumbnail: '',
        rating: 0,
        datepost: ''
      };
    }
  }

  addStory() {
    if (!this.formValid()) {
      this.toastr.error('Form Invalid');
      return;
    }
    this.storiesService.addStory(this.story)
      .subscribe((story) => {
        this.toastr.success(`${story.title} Saved`);
        this.router.navigate(['stories']);
      });
  }

  editStory(story: IStory) {
    if (!this.formValid()) {
      this.toastr.error('Form Invalid');
      return;
    }
    this.storiesService.editStory(story).subscribe(
      () => {
        this.story = story;
        this.toastr.success(`${story.title} Updated!`);
        window.location.reload();
      }
    );
  }

  private formValid(): boolean {
    return this.story.author && this.story.title && this.story.bodyText ? true : false;
  }

}
