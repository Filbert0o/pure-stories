import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoriesService, IStory } from '../stories.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogConfig,  MAT_DIALOG_DATA } from '@angular/material';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-stories-detail',
  templateUrl: './stories-detail.component.html',
  styleUrls: ['./stories-detail.component.scss']
})
export class StoriesDetailComponent implements OnInit {
  story: IStory;

  isLoading = true;
  constructor(
    private route: ActivatedRoute,
    private storiesService: StoriesService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get('storyId');
    console.log('Init in StoriesDetail');
    this.storiesService
      .getStoryById(id)
      .subscribe(story => {
        this.story = story;
       this.isLoading = false;
      });
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.story;
    this.dialog.open(DeleteDialogComponent, dialogConfig);
  }

}

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.html'
})
export class DeleteDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public story: IStory,
    private storiesService: StoriesService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  deleteStory(story: IStory) {
    this.storiesService.deleteStory(story).subscribe(() => {
      this.story = story;
      this.toastr.success(`${story.title} Deleted`);
      this.router.navigate(['stories']);
    });
  }
}
