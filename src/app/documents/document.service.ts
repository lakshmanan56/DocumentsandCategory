import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Document } from './document';
import { publishReplay, refCount } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class DocumentService {
  private documentsUrl = 'api/documents';
  data$: Observable<any>
  constructor(private http: HttpClient) { }

  getDocumentName(): Observable<Document[]> {
    this.data$ = this.http.get<Document[]>(this.documentsUrl)
      .pipe(publishReplay(1), refCount()
      );
    return this.data$;
  }
  
  test() {
    // log test method
  }

}