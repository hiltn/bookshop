// dashboard.component.ts
import { Component } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { MatDialog } from '@angular/material/dialog';
import { DeletebookComponent } from '../deletebook/deletebook.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  allBooks: Book[] = [];
  displayedColumns: string[] = ['id', 'title', 'author', 'type', 'location', 'rating','action'];

  constructor(private bookService: BookService,public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks(): void {
    this.bookService.getAll().subscribe(data => {
      this.allBooks = data;
      console.log(this.allBooks);
    });
  }
  opendeleteModel(id:number){
   const deleteconfm =this.dialog.open(DeletebookComponent,{
      width:'250px',
      data:{id}
   })
   deleteconfm.afterClosed().subscribe((result: any)=>{
    if(result){
      this.allBooks=this.allBooks.filter((_)=>_.id !==id);
    }
   })
  }
}
