import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';

export interface IStory {
  id: number;
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
  constructor(
    private http: HttpClient,
  ) { }

  getStories(): Observable<IStory[]> {
    return this.http.get<IStory[]>('http://localhost:3001/api/stories');
  }

  getStoryById(id: number): Observable<IStory> {
    return this.http.get<IStory>(`http://localhost:3001/api/stories/${id}`);
  }

}
