import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './theme/home/home.component';
import { AboutComponent } from './theme/about/about.component';
import { CrudComponent } from './theme/crud/crud.component';
import { BookFormComponent } from './theme/crud/book-form/book-form.component';
import { BookListComponent } from './theme/crud/book-list/book-list.component';
import { PageNotFoundComponent } from './not-found/page-not-found.component';
import { BookDeleteComponent } from './theme/crud/book-delete/book-delete.component';
import { BookCreateComponent } from './theme/crud/book-create/book-create.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CrudComponent,
    BookFormComponent,
    BookListComponent,
    PageNotFoundComponent,
    BookDeleteComponent,
    BookCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }