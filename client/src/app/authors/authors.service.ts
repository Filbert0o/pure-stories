import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';

export interface IAuthor {
  _id: string;
  name: string;
  gender: string;
  birthdate: string;
  description: string;
  avatar: string;
}

@Injectable()
export class AuthorsService {
  constructor(private http: HttpClient) { }

  getAuthors(): Observable<IAuthor[]> {
    return this.http.get<IAuthor[]>('/api/authors');
  }

  getAuthorById(id: string): Observable<IAuthor> {
    return this.http.get<IAuthor>(`/api/authors/${id}`);
  }

  addAuthor(author: IAuthor): Observable<IAuthor> {
    return this.http.post<IAuthor>(
      '/api/authors/create',
      author
    );
  }

  editAuthor(author: IAuthor): Observable<any> {
    return this.http.put(
      `/api/authors/${author._id}`,
      author
    );
  }

  deleteAuthor(author: IAuthor): Observable<any> {
    return this.http.delete(`/api/authors/${author._id}`);
  }
}
