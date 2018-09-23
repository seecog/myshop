import { Component, OnInit } from '@angular/core';
import { RestApi } from '../services/rest.api';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
private product : any = {};
private categories : any[]=[];
  constructor(private restApi : RestApi) { }

  async ngOnInit() {

    var data = await this.restApi.get("http://localhost:3000/api/profile/categories");
    console.log("The categories is ",data)
    if(data['success']){
      this.categories = data['categories'];
    }

  }

  async addProduct(){
    var data = await this.restApi.post("http://localhost:3000/api/profile/products",this.product)
  console.log('Status is ',data)
  }

}
