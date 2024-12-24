import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  getBooks(query: string) {
    const books = fetch(`https://www.googleapis.com/books/v1/volumes?orderBy=newest&q=${query}&maxResults=40&startIndex=5`);
    return books;
  }
}
