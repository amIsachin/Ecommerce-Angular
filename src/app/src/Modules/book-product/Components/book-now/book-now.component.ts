import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.css']
})
export class BookNowComponent implements OnInit {

  public productId: number = 0;
  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {

    this.route.params.subscribe(response => {
      this.productId = response['productId'];
    });

  }




}
