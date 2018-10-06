import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestApi } from '../services/rest.api';

@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.css']
})
export class OrderdetailComponent implements OnInit {
private orderDetails : any[]=[];
  constructor(private restApi : RestApi,private paramOb : ActivatedRoute) { }

   ngOnInit() {
    this.paramOb.params.subscribe((params)=>{
      var id = params['id'];
      console.log('The mega url is ',"http://localhost:3000/api/billing/order/"+id)
      var data =  this.restApi.get("http://localhost:3000/api/billing/order/"+id)
      .then((res)=>{
   
      if(res['success']){
        this.orderDetails = res['order']['products'];
        console.log('Tiger is ',res['order']['products'])
      }
    })
    })
  }

}
