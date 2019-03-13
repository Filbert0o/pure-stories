import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';

export interface IStory {
  _id: string;
  category: string[];
  author: string;
  title: string;
  bodyText: string;
  favorite: string;
  thumbnail: string;
  rating: number;
  datepost: string;
}

@Injectable()
export class StoriesService {
  constructor(private http: HttpClient) {}

  getStories(): Observable<IStory[]> {
    return this.http.get<IStory[]>('/api/stories');
  }

  getStoryById(id: string): Observable<IStory> {
    return this.http.get<IStory>(`/api/stories/${id}`);
  }

  addStory(story: IStory): Observable<IStory> {
    return this.http.post<IStory>(
      '/api/stories/create',
      story
    );
  }

  editStory(story: IStory): Observable<any> {
    return this.http.put(
      `/api/stories/${story._id}`,
      story
    );
  }

  deleteStory(story: IStory): Observable<any> {
    return this.http.delete(`/api/stories/${story._id}`);
  }
}
