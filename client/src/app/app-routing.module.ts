import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { StoriesListComponent } from './stories/stories-list/stories-list.component';
import { StoriesDetailComponent } from './stories/stories-detail/stories-detail.component';
import { StoriesFormComponent } from './stories/stories-form/stories-form.component';
import { AuthorsListComponent } from './authors/authors-list/authors-list.component';
import { AuthorsFormComponent } from './authors/authors-form/authors-form.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'stories', component: StoriesListComponent },
  { path: 'stories/form', component: StoriesFormComponent },
  { path: 'stories/:storyId', component: StoriesDetailComponent },
  { path: 'authors', component: AuthorsListComponent },
  { path: 'authors/form', component: AuthorsFormComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes)],
})
export class AppRoutingModule { }
