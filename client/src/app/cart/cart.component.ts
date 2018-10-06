import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { RestApi } from '../services/rest.api';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
private cart : any[]=[];
private quantities = [];
  constructor(private dataService : DataService,private restApi : RestApi) { }

  ngOnInit() {
    this.cart = this.dataService.getcart();
    console.log('the main cat is ',this.cart)
    this.cart.forEach(element => {
     this.quantities.push(1);
    });

  }

  get totalCost(){
    var total =0;
  this.cart.forEach((x,i)=>{
total += x['price']* this.quantities[i];
    })
    return total;
  }

  async checkout(){
    var products = [];
    this.cart.forEach((x,i)=>{
products.push({
  product : x['_id'],
  quantity : this.quantities[i]
})
    })

    var order = {
      totalPrice : this.totalCost,
      products : products
    }
    var data = await this.restApi.post('http://localhost:3000/api/billing/order',order);
    console.log('The order status is ',data)
    if(data['success']){
      this.dataService.success(data['message']);
      
      this.dataService.clearCart();
    }
  }

  

}
