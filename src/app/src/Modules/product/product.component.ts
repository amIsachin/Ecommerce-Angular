import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Application/Repository/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

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
