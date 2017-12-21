import { Component, OnInit } from '@angular/core';
import { MainService } from "./../main.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  questions=[];
  user={
    userName:"",
    eamil:""
  };
  search;

  product;

  constructor(private _service: MainService, private _router: Router) { }


  searchQuestion() {
    if(this.search == null) {
      this._service.retrieveQuestions(
        (res) => {
      // console.log("from show question com: ", res);
      this.questions = res;
      console.log("from show question com: ", this.questions);
      })
    }
    else {
      this._service.searchQuestion(this.search, (res) => {
        this.questions = res;
      })
    }
  }

  deleteQuestion(id) {
    this._service.delete(id, (res)=>{this.questions = res});
    // this._service.retrieveProduct(res=>{this.products = res});
  }

  ngOnInit() {
    this.user = this._service.user;
    // console.log(this.user);
    if(this._service.user === null) {
      this._router.navigate(['']);
    }
    else {
      this._service.retrieveQuestions(res => {
        this.questions = res
        // console.log(this.questions);
      });
    }
    this._service.getAllImage(res => {
      var index = Math.floor(Math.random() * res.length);
      this.product = res[index];
    })
  }

  logout() {
    this._service.logout();
    this._router.navigate(['']);
  }

}
