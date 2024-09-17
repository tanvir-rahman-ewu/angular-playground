import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/products';
import { Products } from '../data/products.data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  public getProducts(): Observable<IProduct[]> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(Products);
      }, 5000);
    })
  }
}
