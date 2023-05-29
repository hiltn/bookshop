import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  constructor(private http: HttpClient) {}

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>("http://localhost:3000/books");
  }
  create(playload:Book):Observable<Book>{
    return this.http.post<Book>("http://localhost:3000/books",playload) 
  }
  getById(id: number): Observable<Book> {
    return this.http.get<Book>(`http://localhost:3000/books/${id}`);
  }
  
  update(playload: Book): Observable<Book> {
    return this.http.put<Book>(`http://localhost:3000/books/${playload.id}`, playload);
  }
  delete(id: number): Observable<Book> {
    return this.http.delete<Book>(`http://localhost:3000/books/${id}`);
  }
  
  
}
