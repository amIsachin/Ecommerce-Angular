import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/src/Application/Repository/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  constructor (private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  /**
   * Get all products.
   */
  public getAllProducts () {
    this.productService.getallProducts().subscribe(response => {
      console.log(response);
    });
  }
}