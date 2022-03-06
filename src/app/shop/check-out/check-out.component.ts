import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Order } from 'src/app/model/order.model';
import { OrderRepository } from 'src/app/model/order.repository';
import { AlertifyService } from 'src/app/utils/alertify.service';
import { FormChecker } from 'src/app/utils/FormChecker';

@Component({
  selector: 'shop-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css'],
  providers:[AlertifyService,FormChecker]
})
export class CheckOutComponent implements OnInit {
  
  isOrderSent:boolean=false;
  isSubmitted:boolean=false;
  alertify:AlertifyService;
  orderFormChecker:FormChecker;
  private orderRepository:OrderRepository;
  public order:Order;
  constructor(orderRepository:OrderRepository,order:Order,
    orderFormChecker:FormChecker,alertify:AlertifyService) {
    this.orderRepository=orderRepository;
    this.order=order;
    this.orderFormChecker=orderFormChecker;
    this.alertify=alertify;
   }

  ngOnInit(): void {
  }
  formSubmit(form:NgForm){
    this.isSubmitted=true;

    if(this.orderFormChecker.checkIfAllEntered(form.value.name,form.value.email,
      form.value.address,form.value.phone,
      form.value.city)){
        if(this.orderFormChecker.checkIfTheEmailIsEntered(form.value.email)){
          if(form.valid){
            this.orderRepository.saveOrder(this.order).subscribe(data=>{
              this.order.clearOrder();
              this.isOrderSent=true;
              this.isSubmitted=false;
            })
            this.alertify.success("Siparişiniz Alındı")
        }
      }else{
        this.alertify.error("Lütfen E-Mail Adresinizi Doğru Giriniz")
      }
      }else{
        this.alertify.error("Lütfen Bİlgilerinizi Giriniz")
      }
    }
}

