import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { AllProductsComponent } from './Components/all-products/all-products.component';


@NgModule({
  declarations: [
    ProductComponent,
    AllProductsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ProductComponent]
})
export class ProductModule { }
