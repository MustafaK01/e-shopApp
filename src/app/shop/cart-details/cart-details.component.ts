import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart';

@Component({
  selector: 'shop-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  public cart:Cart;
  constructor(cart:Cart) {
    this.cart=cart;
  }

  ngOnInit(): void {
  }

}

