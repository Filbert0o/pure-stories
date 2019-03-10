import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoriesService, IStory } from '../stories.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stories-detail',
  templateUrl: './stories-detail.component.html',
  styleUrls: ['./stories-detail.component.scss']
})
export class StoriesDetailComponent implements OnInit {
  story: IStory;
  constructor(
    private route: ActivatedRoute,
    private storiesService: StoriesService,
    private router: Router
  ) {}

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get('storyId');
    console.log('Init in StoriesDetail');
    this.storiesService
     .getStoryById(id)
     .subscribe(story => (this.story = story));
  }

}
