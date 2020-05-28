import { Injectable } from '@angular/core';

import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
items = [];
/*  addToCart() method appends a product to an array of items */
 addToCart(product) {
    this.items.push(product);
  }
/* getItems() method collects the items users add to the cart and returns each item with its associated quantity. */
  getItems() {
    return this.items;
  }
/* clearCart() method returns an empty array of items. */
  clearCart() {
    this.items = [];
    return this.items;
  }
  constructor() {}

}