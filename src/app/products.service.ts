import { Injectable } from '@angular/core';
import { Product } from './product'; 

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    { id: 1111, name: 'iPhone 15', price: 350, used: false },
    { id: 2222, name: 'Samsung S24', price: 320, used: true },
    { id: 3333, name: 'MacBook Pro', price: 800, used: false },
    { id: 4444, name: 'iPad Air', price: 250, used: true }
  ];

  constructor() { }
}