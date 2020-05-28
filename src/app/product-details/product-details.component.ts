import { Component, OnInit } from '@angular/core';
/* Import ActivatedRoute from the @angular/router package, and the products array from ../products.  */
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

   product;

  constructor(
    private route: ActivatedRoute,
  ) { }
  /* ngOnInit() method to subscribe route parameters and fetch the product based on the productId.

src/app/product-details/product-deta */
  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.product = products[+params.get('productId')];
  });
}

}
