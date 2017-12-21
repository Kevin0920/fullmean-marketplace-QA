import { Component, OnInit } from '@angular/core';
import { MainService } from "./../main.service";
import { Router } from '@angular/router'; 
import { ActivatedRoute } from '@angular/router';
import { log } from 'util';


@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  question={
    content:"",
    description:"",
    _id:""
  }
  user;

  answer={
    content:"",
    detail:"",
  }
  id;
  
  constructor(private _service: MainService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.user = this._service.user;
    this._route.paramMap.subscribe(params => {
      // console.log("answer comp",params);
      this.id = params.get("id");
      // console.log("id");
      this._service.retrieveOne(params.get("id"), (res) => {
        this.question = res;
      })
    })

  }

  createAns() {
    this._service.createAns(this.answer, this.question._id, this.user._id);
    this._router.navigate(['/show', this.id]);
    this.answer={
      content:"",
      detail:"",
    }
  }

  


  logout(){
    this._service.logout();
    this._router.navigate(['']);
  }

}
