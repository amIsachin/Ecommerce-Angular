import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookProductRoutingModule } from './book-product-routing.module';
import { BookProductComponent } from './book-product.component';
import { BookNowComponent } from './Components/book-now/book-now.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    BookProductComponent,
    BookNowComponent
  ],
  imports: [
    CommonModule,
    BookProductRoutingModule,
    RouterModule
  ],
  exports: [BookNowComponent]
})
export class BookProductModule { }
