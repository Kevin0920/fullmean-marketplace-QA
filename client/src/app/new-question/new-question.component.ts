import { Component, OnInit } from '@angular/core';
import { MainService } from "./../main.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {

  newQues = {
    content:"",
    description:""
  }

  constructor(private _service: MainService, private _router: Router) { }

  creatQues() {
    this._service.create(this.newQues, (res) => {
      console.log(res);
      console.log("new question data sending");
      this.newQues = {
        content:"",
        description:""
      }
    });
    this._router.navigate(['/create']);
  }

  ngOnInit() {
    if (this._service.user == null) {
        this._router.navigate(['']);
    }
  }

  logout() {
    this._service.logout();
    this._router.navigate(['']);
  }

}
