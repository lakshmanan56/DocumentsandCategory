import { Component, Input } from '@angular/core';
import { Document } from './document';
import { DocumentService } from './document.service';
import { throwError } from 'rxjs';


@Component({
    selector: 'app-document-name',
    templateUrl: './document-name.component.html',
    styleUrls: ['./document-name.component.css'],
})
export class DocumentNameComponent {
    searchText: string;
    searchCategoryName: string = 'All';
    cachedData: any;
    documentName: Document[];
    links = ['All', 'Financial', 'Technical', 'Marketing', 'Human Resources']

    constructor(private documentService: DocumentService) {

    }

    ngOnInit(): void {
        this.documentService.getDocumentName().subscribe(
            (data) => {
                this.onInitialLoadComplete(data)
            },
            (error) => throwError(error)
        )
    }

    onInitialLoadComplete(data: Document[]) {
        this.documentName = data;

    }

    onClick(event: any) {
        if (!this.cachedData) {
            this.documentService.data$.subscribe((data) => this.onSetCachedData(data))
        }
        this.searchCategoryName = event.srcElement.text;
        this.documentName = this.cachedData.filter(item => this.searchCategoryName !== 'All' ? item['category'] === this.searchCategoryName : item)
    }

    onSetCachedData(data) {
        this.cachedData = data
    }
}