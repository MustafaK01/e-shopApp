import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cart';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'shop-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  @Input() products:Product[]=[];
  public selectedProduct:Product;
  public nullProduct:Product;
  private cart:Cart;
  private router:Router;
  constructor(cart:Cart,router:Router) {
    this.cart=cart;
    this.router=router
  
  }
  ngOnInit(): void {

  }
  addToCart(product:Product){
    this.cart.addItem(product)
    this.router.navigate(["/cart"])
  }
  seeDetails(product:Product){
    this.selectedProduct=product;
  }
  hideDetails(){
    this.selectedProduct=this.nullProduct;
  }
}

