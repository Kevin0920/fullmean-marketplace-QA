import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { error } from 'selenium-webdriver';

@Injectable()
export class MainService {

  quesitons=[];
  products=[];
  user;

  constructor(private _http: Http) {
    if (localStorage.user !== undefined) {
      this.user = JSON.parse(localStorage.user);
    }
  }

  // create quesiton
  create(questions, callback) {
    console.log(questions);
    console.log("create service route");
    this._http.post('/questions/user/' + this.user._id, questions).subscribe(
      (res)=>{
        callback(res);
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  createPro(products, callback) {
    console.log(products);
    this._http.post('/products/user/' + this.user._id, products)
    .subscribe(
      (res) => {
        console.log("from service create product", res);
        callback(res);
      },
      (err) => {
        console.log(err);
      }
    )
  }

  // create answer
  createAns(answer, quesiton_id, user_id) {
    console.log(answer);
    console.log("answer create service route");
    this._http.post('/answers/' + quesiton_id + '/' + user_id, answer)
    .subscribe(
      (res)=>{
        console.log('from service create answer', res);
      },
      (err)=>{
        console.log(err);
      }
    )
  }


  searchQuestion(search, callback) {
    this._http.post('/search', {search: search}).subscribe(
      (res)=>{
        console.log("service search =>", res);
        callback(res.json());
      },
      (err)=>{
        console.log("service search function err");
      }
    )
  }

  update(id, product, callback) {
    this._http.put('/products/' + id, product).subscribe(
      (res)=>{
        console.log("service update");
        callback(res.json());
      },
      (err)=>{
        console.log("service update err");
      }
    )
  }

  like(id, callback) {
    console.log(id);
    this._http.post('/like/' + id, {}).subscribe(
      (res) => {
        console.log(res.json());
        callback(res.json());
      },
      (err) => {
        console.log(err);
      }
    )
  }


  delete(id, callback) {
    console.log('delete method');
    this._http.delete('/questions/' + id).subscribe(
      (res)=>{
        console.log(res.json());
        callback(res.json());
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  deletePro(id, callback) {
    console.log('delete prod');
    this._http.delete('/products/' + id).subscribe(
      (res) => {
        console.log(res.json());
        callback(res.json());
      },
      (err) => {
        console.log(err);
      }
    )
  }

  // retrieve all quesitons
  retrieveQuestions(callback) {
      this._http.get('/questions').subscribe(
        (res)=>{
          callback(res.json());
        },
        (err)=>{
          console.log(err);
        }
      )
    }

  // retrieve all create products 
  retrieveProducts(callback) {
    this._http.get('/products').subscribe(
      (res) => {
        console.log(res);
        callback(res.json());
      },
      (err) => {
        console.log(err);
      }
    )
  }

  // register user
  register(data, callback) {
    this._http.post("/register", data).subscribe(
      (res) => {
        console.log("from service register: ", res.json());
        callback(res.json());
        if (res.json().success = "success") {
          this.user = res.json().user;
          localStorage.user = JSON.stringify(res.json().user);
        }
      },
      (err) => {
        console.log(err);
      })
  }

  login(data, callback) {
    this._http.post("/login", data).subscribe(
      (res) => {
        callback(res.json());
        console.log(res.json());
        this.user = res.json().user;
        console.log(this.user);
        localStorage.user = JSON.stringify(res.json().user);
      },
      (err) => {
        console.log("error from login service: ", err);
      })
  }


  retrieveOne(id, callback) {
    // console.log("service one quesiton id: ", id);
    this._http.get('/question/' + id).subscribe((res)=>{
      // console.log(res.json());
      callback(res.json());
    })
  }

  // contact poster route

  findPoster(id, callback) {
    this._http.get('/products/' + id + '/user').subscribe(
      (res) => {
        callback(res.json());
      },
      (err) => {
        console.log("contact can't find this poster");
      }
    )
  }



  logout() {
    console.log("logout service");
    localStorage.removeItem("user");
    console.log(localStorage.user);
    this.user = null;
  }

  // get all products display 
  getAllImage(callback) {
    this._http.get('/products').subscribe(
      (res) => {
        callback(res.json());
      },
      (err) => {
        console.log("service can't get display");
      }
    )
  }

}
