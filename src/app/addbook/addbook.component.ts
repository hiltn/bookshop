import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit{
  bookrecords: Book ={
    id: 0,
    title: '',
    author: '',
    type: '',
    location: '',
    rating: 0
  }
constructor(private bk:BookService, private router:Router){}
ngOnInit():void{}
addRecords(): void{
  this.bk.create(this.bookrecords).subscribe((data)=>{
    this.router.navigate(["/"])
  })
}
}
