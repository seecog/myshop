import { Component, OnInit } from '@angular/core';
// import { DataService } from '../../old_app/app/services/data.service';
import { RestApi } from '../services/rest.api';
import {DataService} from '../services/data.service';
@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {
private orders : any[];
  constructor(private dataService : DataService,private reastApi : RestApi) { }

  async ngOnInit() {
var data = await this.reastApi.get("http://localhost:3000/api/billing/order")
console.log('The last order are ',data)
if(data['success']){
  this.orders =  data['orders'];
}  
}

}
