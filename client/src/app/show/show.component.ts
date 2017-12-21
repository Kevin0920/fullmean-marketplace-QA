import { Component, OnInit } from '@angular/core';
import { MainService } from "./../main.service";
import { Router } from '@angular/router'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  question={
    content:"",
    description:"",
    _id:""
  }
  user;

  answer={
    content:"",
    detail:"",
    likes: Number
  }

  id;

  constructor(private _service: MainService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.user = this._service.user;
    this._route.paramMap.subscribe(params => {
      // console.log(params);
      this._service.retrieveOne(params.get("id"), (res) => {
        this.question = res;
        console.log(this.question);
      })
    })

  }

  like(id) {
    console.log("like method");
    this._service.like(id, (res) => {
      this.question = res;
    })
    // get id from url route 
    this._route.paramMap.subscribe(params => {
      this.id = params.get("id");
      this._service.retrieveOne(params.get("id"), (res) => {
        this.question = res;
        console.log(res);
      })
    })
  }
  



  logout() {
    this._service.logout();
    this._router.navigate(['']);
  }


}
