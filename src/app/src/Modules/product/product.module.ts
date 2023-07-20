import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { AllProductsComponent } from './Components/all-products/all-products.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProductComponent,
    AllProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class ProductModule { }
