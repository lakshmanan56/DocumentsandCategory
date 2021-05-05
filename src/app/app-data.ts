import { InMemoryDbService } from 'angular-in-memory-web-api';
import { DocumentData } from './documents/document-data';
import { Document } from './documents/document'


export class AppData implements InMemoryDbService {

  createDb(): { documents: Document[] } {
    const documents = DocumentData.document;
    return { documents };
  }
}
