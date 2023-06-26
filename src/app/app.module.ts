import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppData } from './app-data';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentNameComponent } from './documents/document-name.component';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [
    AppComponent,
    DocumentNameComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(AppData, { delay: 1000 }),

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
