import { Component, OnInit } from '@angular/core';
import { MainService } from "./../main.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  products = {
    image:"",
    title:"",
    location:"",
    description:"",
    price: ""
  }
  user;
  myProducts;

  editProds = {
    image:"",
    title:"",
    location:"",
    description:"",
    price: ""
  }

  constructor(private _service: MainService, private _router: Router) { }

  ngOnInit() {
    this.user = this._service.user;
    if(this._service.user == null) {
      this._router.navigate(['']);
    }
    else {
      this._service.retrieveProducts(res => {
        this.myProducts = res;
        console.log(this.myProducts);
      })
    }
  }

  createProd() {
    console.log("new product from ts sending");
    this._service.createPro(this.products, (res) => {
      this.products = {
        image:"",
        title:"",
        location:"",
        description:"",
        price: ""
      }
    });
    console.log(this.products);
    this._router.navigate(['/browse']);
  }

  editProd(id, data) {
    this._service.update(id, data, (res) => {
      console.log("edit from ts");
      // console.log(res);
      this.editProds = {
        image:"",
        title:"",
        location:"",
        description:"",
        price: ""
      }  
    });
  }
  
  deleteProd(id) {
    this._service.deletePro(id, (res) => {
    this.products = res;
    });
  }

  logout() {
    this._service.logout();
    this._router.navigate(['']);
  }

}
