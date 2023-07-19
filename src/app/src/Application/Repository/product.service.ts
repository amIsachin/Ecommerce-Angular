import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userEntity } from '../../Domain/Entities/UserEntity';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private readonly baseUri = 'https://localhost:44396/';

  /**
   * Get all products
   */
  public getallProducts (): Observable<userEntity[]> {
    return this.http.get<userEntity[]>(this.baseUri + 'api/Product/GetAllProducts');
  }
}
