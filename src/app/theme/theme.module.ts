import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CrudComponent } from './crud/crud.component';
import { BookDeleteComponent } from './crud/book-delete/book-delete.component';
import { BookCreateComponent } from './crud/book-create/book-create.component';
import { BookListComponent } from './crud/book-list/book-list.component';
import { BookFormComponent } from './crud/book-form/book-form.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    CrudComponent,
    BookDeleteComponent,
    BookCreateComponent,
    BookListComponent,
    BookFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ThemeModule { }
