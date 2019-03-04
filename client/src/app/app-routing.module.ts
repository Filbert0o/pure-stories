import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { StoriesListComponent } from './stories/stories-list/stories-list.component';

const appRoutes: Routes = [
  { path: 'stories', component: StoriesListComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes)],
})
export class AppRoutingModule { }
