import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private readonly baseUri = 'https://localhost:44396/';

  /**
   * Get all products
   */
}
