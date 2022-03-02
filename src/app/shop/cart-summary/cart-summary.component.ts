import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart';

@Component({
  selector: 'shop-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css'],
  providers:[]
})
export class CartSummaryComponent implements OnInit {

  public cart:Cart;

  constructor(cart:Cart) { 
    this.cart=cart; 
  }
  
  ngOnInit(): void {
  }

}

