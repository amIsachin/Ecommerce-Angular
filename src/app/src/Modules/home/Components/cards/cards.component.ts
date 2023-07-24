import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/src/Application/Repository/product.service';
import { productEntity } from 'src/app/src/Domain/Entities/Product';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  public productEntity: productEntity[] = [];

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  /**
   * Get all products.
   */
  public getAllProducts() {
    this._productService.getallProducts().subscribe(response => {
      console.log (response)
      this.productEntity = response;
    });
  }

}
