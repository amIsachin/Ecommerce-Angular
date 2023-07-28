import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookProductComponent } from './book-product.component';
import { BookNowComponent } from './Components/book-now/book-now.component';

const routes: Routes = [
  {
    path: 'book', component: BookProductComponent, children: [
      { path: 'book-now/:productId', component: BookNowComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookProductRoutingModule { }
