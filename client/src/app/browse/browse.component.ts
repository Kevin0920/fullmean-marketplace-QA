import { Component, OnInit } from '@angular/core';
import { MainService } from "./../main.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  products=[];
  user = {
    userName:"",
    email:""
  }
  poster = {
    userName:"",
    email:""
  }
  constructor(private _service: MainService, private _router: Router ) { }

  ngOnInit() { 
    // get user from service 
    this.user = this._service.user;
    if(this._service.user === null) {
      this._router.navigate(['']);
    } 
    else {
      this._service.retrieveProducts(res => {
        this.products = res;
      })
    }
  }

  contact(id) {
    console.log(id);
    this._service.findPoster(id, (res)=>{this.poster = res});
  }

  deleteProd(id) {
    this._service.deletePro(id, (res)=>{this.products = res});
  }

  logout() {
    this._service.logout();
    this._router.navigate(['']);
  }
 
}
