import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {
  bookrecords: Book = {
    id: 0,
    title: '',
    author: '',
    type: '',
    location: '',
    rating: 0
  };
  router: any;
  
  constructor(private bk: BookService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = Number(params.get('id'));
      this.getById(id);
    });
  }

  getById(id: number) {
    this.bk.getById(id).subscribe((data) => {
      this.bookrecords = data;
    });
  }

updateRecords(){
  this.bk.update(this.bookrecords).subscribe(()=>{
    this.router.navigate(['/'])
  })
}
  
}
