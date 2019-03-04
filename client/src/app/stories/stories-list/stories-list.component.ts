import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoriesService, IStory } from '../stories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stories-list',
  templateUrl: './stories-list.component.html'
  // styleUrls: ['./stories-list.component.css']
})
export class StoriesListComponent implements OnInit, OnDestroy {
  stories: IStory[];
  constructor(
    private storiesService: StoriesService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log('Init in StoriesList');
    // this.storiesService.getStories()
    //   .subscribe(
    //     (stories) => this.stories = stories
    //   );
    // this.stories = this.storiesService.getStories();
  }

  ngOnDestroy(): void {
    console.log('Destroy on StoriesList');
  }
}
