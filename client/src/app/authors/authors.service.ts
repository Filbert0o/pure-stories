import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';

export interface IAuthor {
  id: number;
  name: string;
  gender: string;
  birthdate: string;
  description: string;
  avatar: string;
}

@Injectable()
export class AuthorsService {
  constructor(
    private http: HttpClient,
  ) { }

  getAuthors(): Observable<IAuthor[]> {
    return this.http.get<IAuthor[]>('http://localhost:3001/api/authors');
  }

  getAuthorById(id: number): Observable<IAuthor> {
    return this.http.get<IAuthor>(`http://localhost:3001/api/authors/${id}`);
  }

}
