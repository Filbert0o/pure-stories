import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { StoriesListComponent } from './stories/stories-list/stories-list.component';
import { StoriesDetailComponent } from './stories/stories-detail/stories-detail.component';
import { StoriesFormComponent } from './stories/stories-form/stories-form.component';
import { AuthorsListComponent } from './authors/authors-list/authors-list.component';

const appRoutes: Routes = [
  { path: 'stories', component: StoriesListComponent },
  { path: 'stories/form', component: StoriesFormComponent },
  { path: 'stories/:storyId', component: StoriesDetailComponent },
  { path: 'authors', component: AuthorsListComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes)],
})
export class AppRoutingModule { }
