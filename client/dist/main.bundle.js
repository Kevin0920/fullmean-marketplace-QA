webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/answer/answer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#logout {\n    margin-left: 1000px;\n    height: 40px;\n  \n  }\n\n.container {\n    width: 90%;\n}\n\n.alert-warning {\n    color: #8a6d3b;\n    background-color: #fcf8e3;\n    border-color: #faebcc;\n    margin-left: 238px;\n  }\n\nlabel {\n    color: blanchedalmond;\n    font: bold;\n    font-family: 'Berkshire Swash', cursive;\n    font-size: 20px;\n    text-shadow: 2px 2px gray;\n}\n.navbar-inverse .navbar-nav>li>a {\n    color: #fff;\n    text-decoration: none;\n}\n.header{\n    color: #fff;\n}\n\n#display {\n    background-color: hsla(0, 100%, 30%, 0.3);\n    padding: 10px;\n    border-radius: 10px;\n    color: #fff;\n    border: 1px solid black;  \n  }\nh1, h2{\n    font-family: 'Berkshire Swash', cursive;\n}\n\nbody {\n    background: url(/./../assets/image/pexels-photo-207301.jpeg) no-repeat center center;\n    -webkit-background-attachment: fixed;\n    background-attachment: fixed;\n    background-size: cover;\n    padding: 0;\n    position: relative;\n    height: 830px;\n  }\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/answer/answer.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <link href=\"https://fonts.googleapis.com/css?family=Berkshire+Swash\" rel=\"stylesheet\">\n  <title></title>\n</head>\n<body>\n  <nav class=\"navbar navbar-inverse\">\n      <div class=\"container-fluid\">\n        <ul class=\"nav navbar-nav\">\n          <li class=\"active\"><a [routerLink]=\"['/create']\">Home</a></li>\n          <li class=\"active\"><a [routerLink]=\"['/show', question._id]\">Go Back to Question</a></li>\n          <button id=\"logout\" class=\"btn btn-danger\"><a (click)=\"logout()\">Log Out</a></button>\n        </ul>\n      </div>\n  </nav>\n  <div class=\"container\">\n    <h1 class=\"header\">Let's answer some questions!!!</h1>\n    <hr>\n    <div id=\"display\" class=\"form-group\">\n      <h1>{{question.content}}</h1>\n      <h2>{{question.description}}</h2>\n    </div>\n     <form class=\"form-horizontal\" (submit)=\"createAns()\" #ansData=\"ngForm\">\n        <div class=\"form-group\">\n            <label class=\"control-label col-sm-2\">Your Answer:</label>\n            <div class=\"col-sm-10\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter answer.....\" name=\"content\"\n              [(ngModel)] = \"answer.content\"\n              required minlength=\"10\"\n              #answerData=\"ngModel\">\n            </div>\n          </div>\n          <div class=\"alert alert-warning\" *ngIf = \"answerData.invalid && (answerData.dirty || answerData.touched)\">\n              <strong>\n                Warning! please fill in your question !!!\n              </strong>\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"control-label col-sm-2\">Supporting details for your answer(Optional):</label>\n            <div class=\"col-sm-10\">\n              <textarea class=\"form-control\" rows=\"5\" name=\"detail\"\n              [(ngModel)] = \"answer.detail\"\n              ></textarea>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"col-sm-offset-2 col-sm-10\">\n            <button type=\"submit\" class=\"btn btn-success\" style=\"font-family: 'Fugaz One', cursive;\"\n            [disabled]=\"!ansData.valid\">Submit</button>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"col-sm-offset-2 col-sm-10\">\n            <button class=\"btn btn-danger\"\n            style=\"font-family: 'Fugaz One', cursive;\"><a [routerLink]=\"['/home']\">Cancel</a></button>\n          </div>\n        </div>\n\n    </form>\n\n  </div>\n</body>\n</html>"

/***/ }),

/***/ "../../../../../src/app/answer/answer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AnswerComponent = (function () {
    function AnswerComponent(_service, _router, _route) {
        this._service = _service;
        this._router = _router;
        this._route = _route;
        this.question = {
            content: "",
            description: "",
            _id: ""
        };
        this.answer = {
            content: "",
            detail: "",
        };
    }
    AnswerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this._service.user;
        this._route.paramMap.subscribe(function (params) {
            // console.log("answer comp",params);
            _this.id = params.get("id");
            // console.log("id");
            _this._service.retrieveOne(params.get("id"), function (res) {
                _this.question = res;
            });
        });
    };
    AnswerComponent.prototype.createAns = function () {
        this._service.createAns(this.answer, this.question._id, this.user._id);
        this._router.navigate(['/show', this.id]);
        this.answer = {
            content: "",
            detail: "",
        };
    };
    AnswerComponent.prototype.logout = function () {
        this._service.logout();
        this._router.navigate(['']);
    };
    AnswerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-answer',
            template: __webpack_require__("../../../../../src/app/answer/answer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/answer/answer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], AnswerComponent);
    return AnswerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_question_new_question_component__ = __webpack_require__("../../../../../src/app/new-question/new-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__show_show_component__ = __webpack_require__("../../../../../src/app/show/show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__answer_answer_component__ = __webpack_require__("../../../../../src/app/answer/answer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__buy_buy_component__ = __webpack_require__("../../../../../src/app/buy/buy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__browse_browse_component__ = __webpack_require__("../../../../../src/app/browse/browse.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */], pathMatch: "full" },
    { path: 'create', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'question', component: __WEBPACK_IMPORTED_MODULE_4__new_question_new_question_component__["a" /* NewQuestionComponent */] },
    { path: 'question/:id', component: __WEBPACK_IMPORTED_MODULE_5__show_show_component__["a" /* ShowComponent */], pathMatch: "full" },
    { path: 'show', component: __WEBPACK_IMPORTED_MODULE_5__show_show_component__["a" /* ShowComponent */] },
    { path: 'show/:id', component: __WEBPACK_IMPORTED_MODULE_5__show_show_component__["a" /* ShowComponent */] },
    { path: 'answer', component: __WEBPACK_IMPORTED_MODULE_6__answer_answer_component__["a" /* AnswerComponent */] },
    { path: 'answer/:id', component: __WEBPACK_IMPORTED_MODULE_6__answer_answer_component__["a" /* AnswerComponent */] },
    // bring user id to this component 
    { path: 'products/:id', component: __WEBPACK_IMPORTED_MODULE_7__buy_buy_component__["a" /* BuyComponent */] },
    { path: 'browse', component: __WEBPACK_IMPORTED_MODULE_8__browse_browse_component__["a" /* BrowseComponent */] },
    { path: 'browse/:id', component: __WEBPACK_IMPORTED_MODULE_8__browse_browse_component__["a" /* BrowseComponent */], pathMatch: "full" }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contain .form-group {\n  margin: 0px;\n  background-color: black;\n  padding: 10px;\n  opacity: 0.9;\n}\nh1 {\n  font-family: 'Berkshire Swash', cursive;\n  text-align: center;\n  font-size: 50px;\n  color: #15c4a1;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\">\n    <title></title>\n    <link href=\"https://fonts.googleapis.com/css?family=Berkshire+Swash\" rel=\"stylesheet\">\n  </head>\n  <body>\n    <div class=\"contain\">\n      <div class=\"form-group\">\n        <h1 align=\"center\">Q&A: Market Trade</h1>\n      </div>\n    </div>\n    <router-outlet></router-outlet>\n  </body>\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__new_question_new_question_component__ = __webpack_require__("../../../../../src/app/new-question/new-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__show_show_component__ = __webpack_require__("../../../../../src/app/show/show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__answer_answer_component__ = __webpack_require__("../../../../../src/app/answer/answer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__buy_buy_component__ = __webpack_require__("../../../../../src/app/buy/buy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__browse_browse_component__ = __webpack_require__("../../../../../src/app/browse/browse.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 // <-- Import FormsModule











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__new_question_new_question_component__["a" /* NewQuestionComponent */],
                __WEBPACK_IMPORTED_MODULE_10__show_show_component__["a" /* ShowComponent */],
                __WEBPACK_IMPORTED_MODULE_11__answer_answer_component__["a" /* AnswerComponent */],
                __WEBPACK_IMPORTED_MODULE_12__buy_buy_component__["a" /* BuyComponent */],
                __WEBPACK_IMPORTED_MODULE_13__browse_browse_component__["a" /* BrowseComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__main_service__["a" /* MainService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/browse/browse.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n    width: 500px;\n}\n\n.info1 {\n    display: inline-block;\n}\n.info2 {\n    display: inline-block;\n}\nh3 {\n    font-weight: bold;\n}\n#scrollbar {\n    overflow-y: scroll;\n    max-height: 1000px;\n    border: 1px solid black;\n    padding: 10px;\n}\n\nnav {\n    border-radius: 0px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/browse/browse.component.html":
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n</head>\n\n<body>\n  <nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" [routerLink]=\"['/create']\">Home</a>\n      </div>\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n          <a [routerLink]=\"['/products', user._id]\">Go Back Create Page</a>\n        </li>\n      </ul>\n      <button style=\"float:right;\" class=\"btn btn-danger navbar-btn\">\n        <a (click)=\"logout()\">Log Out</a>\n      </button>\n    </div>\n  </nav>\n  <div class=\"container\">\n    <h1 style=\"font-family: 'Fugaz One', cursive;\">Hi {{user?.userName | uppercase}} !</h1>\n    <h3 style=\"font-family: 'Fugaz One', cursive;\"> Become as member at {{user.createdAt | date:'medium'}} !</h3>\n  </div>\n  <div id=\"scrollbar\" class=\"container\">\n    <div class=\"form-group\" *ngFor=\"let p of products\">\n      <div class=\"info1\">\n        <img src=\"{{p.image}}\">\n      </div>\n      <div class=\"info2\">\n        <h3>Title: {{p.title}}</h3>\n        <h3>Price: {{p.price}}</h3>\n        <h3>Location: {{p.location}}</h3>\n        <h3>Description: {{p.description}}</h3>\n        <button *ngIf=\"p._user._id === user._id\" (click)=\"deleteProd(p._id)\" class=\"btn btn-danger\">Delete</button>\n\n        <button *ngIf=\"p._user._id !== user._id\" (click)=\"contact(p._user._id)\" class=\"btn btn-warning\" data-toggle=\"modal\" data-target=\"#exampleModal\">Contact</button>\n      </div>\n    </div>\n  </div>\n\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h3 class=\"modal-title\" id=\"exampleModalLabel\" style=\"color: grey;\">\n            Poster:\n          </h3>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <h5 style=\"color: #4186cb;\">Name: {{poster.userName}}</h5>\n          <br>\n          <h5 style=\"color: #4186cb;\">Email: {{poster.email}}</h5>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n</body>\n\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/browse/browse.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BrowseComponent = (function () {
    function BrowseComponent(_service, _router) {
        this._service = _service;
        this._router = _router;
        this.products = [];
        this.user = {
            userName: "",
            email: ""
        };
        this.poster = {
            userName: "",
            email: ""
        };
    }
    BrowseComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get user from service 
        this.user = this._service.user;
        if (this._service.user === null) {
            this._router.navigate(['']);
        }
        else {
            this._service.retrieveProducts(function (res) {
                _this.products = res;
            });
        }
    };
    BrowseComponent.prototype.contact = function (id) {
        var _this = this;
        console.log(id);
        this._service.findPoster(id, function (res) { _this.poster = res; });
    };
    BrowseComponent.prototype.deleteProd = function (id) {
        var _this = this;
        this._service.deletePro(id, function (res) { _this.products = res; });
    };
    BrowseComponent.prototype.logout = function () {
        this._service.logout();
        this._router.navigate(['']);
    };
    BrowseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-browse',
            template: __webpack_require__("../../../../../src/app/browse/browse.component.html"),
            styles: [__webpack_require__("../../../../../src/app/browse/browse.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], BrowseComponent);
    return BrowseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/buy/buy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n    background: url(/./../assets/image/pexels-photo-673648.jpeg) no-repeat center center;\n    -webkit-background-attachment: fixed;\n    background-attachment: fixed;\n    background-size: cover;\n    padding: 0;\n    position: relative;\n}\n\nimg {\n    width: 500px;\n}\n.well {\n    overflow-y: scroll;\n    height: 600px;\n    background-color: #dae8e6;\n}\n\nnav {\n    border-radius: 0px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/buy/buy.component.html":
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n</head>\n\n<body>\n  <nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" [routerLink]=\"['/create']\">Home</a>\n      </div>\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n          <a [routerLink]=\"['/browse']\">Browse</a>\n        </li>\n      </ul>\n      <button style=\"float:right;\" class=\"btn btn-danger navbar-btn\">\n        <a (click)=\"logout()\">Log Out</a>\n      </button>\n    </div>\n  </nav>\n\n  <div class=\"container\">\n    <form (submit)=\"createProd()\" #prodData=\"ngForm\">\n      <fieldset>\n        <legend>Create Listing</legend>\n        <div class=\"form-group\">\n          <label>Image Upload:</label>\n          <input type=\"url\" class=\"form-control\" placeholder=\"image url...\" name=\"image\" [(ngModel)]=\"products.image\">\n        </div>\n        <div class=\"form-group\">\n          <label>Title:</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"title....\" name=\"title\" [(ngModel)]=\"products.title\" required minlength=\"3\"\n            #produData=\"ngModel\">\n        </div>\n        <div class=\"alert alert-warning\" *ngIf=\"produData.invalid && (produData.dirty || produData.touched)\">\n          <strong>\n            Warning! please fill in your title !!!\n          </strong>\n        </div>\n        <div class=\"form-group\">\n          <label>Location:</label>\n          <input type=\"text\" name=\"location\" placeholder=\"location....\" class=\"form-control\" [(ngModel)]=\"products.location\" required\n            minlength=\"3\" #produData=\"ngModel\">\n        </div>\n        <div class=\"alert alert-warning\" *ngIf=\"produData.invalid && (produData.dirty || produData.touched)\">\n          <strong>\n            Warning! no location !!!\n          </strong>\n        </div>\n\n        <div class=\"form-group\">\n          <label>Price:</label>\n          <input type=\"number\" class=\"form-control\" name=\"price\" placeholder=\"price....\" [(ngModel)]=\"products.price\" required #produData=\"ngModel\">\n        </div>\n        <div class=\"alert alert-warning\" *ngIf=\"produData.invalid && (produData.dirty || produData.touched)\">\n          <strong>\n            Warning! no price ???\n          </strong>\n        </div>\n        <div class=\"form-group\">\n          <label>Description:</label>\n          <textarea class=\"form-control\" rows=\"3\" name=\"description\" placeholder=\"description....\" [(ngModel)]=\"products.description\"\n            required minlength=\"5\" maxlength=\"200\" #produData=\"ngModel\"></textarea>\n        </div>\n        <div class=\"alert alert-warning\" *ngIf=\"produData.invalid && (produData.dirty || produData.touched)\">\n          <strong>\n            Warning! Please write some description !!!\n          </strong>\n        </div>\n        <button type=\"submit\" class=\"btn btn-info\" style=\"font-family: 'Fugaz One', cursive;\" [disabled]=\"!prodData.valid\">Submit</button>\n      </fieldset>\n    </form>\n  </div>\n\n  <div class=\"well\">\n    <h1>Hi {{user?.userName}} !</h1>\n    <h2>Post Owner Can edit/delete own post!!!</h2>\n    <div *ngFor=\"let p of myProducts\">\n      <form (submit)=\"editProd(p._id, editProds)\" #formData=\"ngForm\">\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <img src=\"{{p.image}}\">\n          </div>\n          <div class=\"col-sm-6\">\n            <strong>Image URL:</strong>\n            <input class=\"form-control\" type=\"url\" required [(ngModel)]=\"editProds.image\" name=\"image\">\n            <br>\n            <strong>Title:</strong>\n            <input class=\"form-control\" type=\"text\" required [(ngModel)]=\"editProds.title\" name=\"title\">\n            <br>\n            <strong>Location:</strong>\n            <input class=\"form-control\" type=\"text\" required [(ngModel)]=\"editProds.location\" name=\"location\">\n            <br>\n            <strong>Price:</strong>\n            <input class=\"form-control\" type=\"number\" required [(ngModel)]=\"editProds.price\" name=\"price\">\n            <br>\n            <strong>Description:</strong>\n            <textarea class=\"form-control\" rows=\"3\" name=\"description\" [(ngModel)]=\"editProds.description\" required minlength=\"5\" maxlength=\"200\"></textarea>\n            <br>\n            <button style=\"margin-bottom: 10px;\" *ngIf=\"p._user._id === user._id\" class=\"btn btn-success\" type=\"submit\" [disabled]=\"!formData.valid\">Update</button>\n          </div>\n        </div>\n      </form>\n      <button type=\"submit\" *ngIf=\"p._user._id === user._id\" class=\"btn btn-danger\" style=\"margin-left: 780px;\" (click)=\"deleteProd(p._id)\">Delete</button>\n    </div>\n  </div>\n  <hr>\n</body>\n\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/buy/buy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuyComponent = (function () {
    function BuyComponent(_service, _router) {
        this._service = _service;
        this._router = _router;
        this.products = {
            image: "",
            title: "",
            location: "",
            description: "",
            price: ""
        };
        this.editProds = {
            image: "",
            title: "",
            location: "",
            description: "",
            price: ""
        };
    }
    BuyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this._service.user;
        if (this._service.user == null) {
            this._router.navigate(['']);
        }
        else {
            this._service.retrieveProducts(function (res) {
                _this.myProducts = res;
                console.log(_this.myProducts);
            });
        }
    };
    BuyComponent.prototype.createProd = function () {
        var _this = this;
        console.log("new product from ts sending");
        this._service.createPro(this.products, function (res) {
            _this.products = {
                image: "",
                title: "",
                location: "",
                description: "",
                price: ""
            };
        });
        console.log(this.products);
        this._router.navigate(['/browse']);
    };
    BuyComponent.prototype.editProd = function (id, data) {
        var _this = this;
        this._service.update(id, data, function (res) {
            console.log("edit from ts");
            // console.log(res);
            _this.editProds = {
                image: "",
                title: "",
                location: "",
                description: "",
                price: ""
            };
        });
    };
    BuyComponent.prototype.deleteProd = function (id) {
        var _this = this;
        this._service.deletePro(id, function (res) {
            _this.products = res;
        });
    };
    BuyComponent.prototype.logout = function () {
        this._service.logout();
        this._router.navigate(['']);
    };
    BuyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-buy',
            template: __webpack_require__("../../../../../src/app/buy/buy.component.html"),
            styles: [__webpack_require__("../../../../../src/app/buy/buy.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], BuyComponent);
    return BuyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  font-family: 'Berkshire Swash', cursive;\n}\n.box {\n  display: inline-block;\n}\n.box button {\n  margin-left: 825px;\n}\n\nbody {\n  background: url(/./../assets/image/pexels-photo-139259.jpeg) no-repeat center center;\n  -webkit-background-attachment: fixed;\n  background-attachment: fixed;\n  background-size: cover;\n  padding: 0;\n  position: relative;\n}\n\n/* A tag style */\n\na:hover {\n  color: #fff;\n  text-decoration: none;\n}\n\n#searchbar{\n  background-color: #1222;\n  color: #fff;\n  height: 50px;\n  border-radius: 10px;\n}\n\n#hover {\n  background-color: transparent;\n  border: 1px solid #fff;\n  padding: 10px;\n  color: #fff;\n  margin-bottom: 25px;\n  border-radius: 15px;\n}\n#hover a {\n  padding: 15px 35px;\n  text-align: center;\n}\n#hover:hover{\n  background-color: #4fcaef;\n}\n\n#product {\n  background-color: transparent;\n  border: 1px solid black;\n  padding: 10px;\n  color: black;\n  margin-top: 30px;\n  border-radius: 15px;\n  width: 205px;\n}\n\n#product a{\n  padding: 15px 35px;\n  text-align: center;\n}\n\n#product:hover{\n  background-color: #4fcaef;\n}\n\n\n/*table style*/\n\ntable {\n  border: 1px solid #fff;\n  padding: 10px;\n  height: 450px;\n  font-size: 20px;\n  font-family: 'Fugaz One', cursive;\n}\n\nimg {\n  width: 500px;\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"utf-8\">\n  <title></title>\n  <link href=\"https://fonts.googleapis.com/css?family=Fugaz+One\" rel=\"stylesheet\">\n</head>\n\n<body>\n  <div class=\"container\">\n    <div class=\"form-group\">\n      <div class=\"box\">\n        <h1>Hi {{user?.userName}} !</h1>\n      </div>\n      <div class=\"box\">\n        <button (click)=\"logout()\" class=\"btn btn-info\" style=\"float: right; font-family: 'Fugaz One', cursive;\">Log out</button>\n      </div>\n\n      <button id=\"product\"><a [routerLink]=\"['/products', user._id]\">Go to Market</a></button>\n    </div>\n\n    <button id=\"hover\"><a [routerLink]=\"['/question']\">Add a Question</a></button>\n\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n          <img src=\"{{product?.image}}\" alt=\"\">\n      </div>\n      \n      <div class=\"col-sm-6\">\n          <h3><strong>Title: {{product?.title}}</strong></h3>\n          <h3><strong>Location: {{product?.location}}</strong></h3>\n          <h3><strong>Price: {{product?.price}}</strong></h3>\n          <h3><strong>Description: {{product?.description}}</strong></h3>\n      </div>\n      \n    </div>\n\n    <div class=\"form-group\">\n      <label>Search:</label>\n      <input id=\"searchbar\" class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)] = \"search\" (keyup) = (searchQuestion()) placeholder=\"Search questions by title....\">\n    </div>\n\n    <!-- Table Search -->\n    <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th scope=\"col\">Question</th>\n          <th scope=\"col\">Creater</th>\n          <th scope=\"col\">Answer</th>\n          <th scope=\"col\">Action</th>\n        </tr>\n      </thead>\n      <tbody>        \n        <tr *ngFor=\"let q of questions\">\n          <td>{{q.content}}</td>\n          <td>{{q._user.userName}}</td>\n          <td>{{q._answers.length}}</td>\n          <td>\n            <button class=\"btn btn-info\">\n              <a [routerLink]=\"['/show', q._id]\">Show</a>\n            </button>\n            <button class=\"btn btn-warning\">\n              <a [routerLink]=\"['/answer', q._id]\">Answer</a>\n            </button>\n            <button class=\"btn btn-danger\" (click)=\"deleteQuestion(q._id)\">Delete</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</body>\n\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(_service, _router) {
        this._service = _service;
        this._router = _router;
        this.questions = [];
        this.user = {
            userName: "",
            eamil: ""
        };
    }
    HomeComponent.prototype.searchQuestion = function () {
        var _this = this;
        if (this.search == null) {
            this._service.retrieveQuestions(function (res) {
                // console.log("from show question com: ", res);
                _this.questions = res;
                console.log("from show question com: ", _this.questions);
            });
        }
        else {
            this._service.searchQuestion(this.search, function (res) {
                _this.questions = res;
            });
        }
    };
    HomeComponent.prototype.deleteQuestion = function (id) {
        var _this = this;
        this._service.delete(id, function (res) { _this.questions = res; });
        // this._service.retrieveProduct(res=>{this.products = res});
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this._service.user;
        // console.log(this.user);
        if (this._service.user === null) {
            this._router.navigate(['']);
        }
        else {
            this._service.retrieveQuestions(function (res) {
                _this.questions = res;
                // console.log(this.questions);
            });
        }
        this._service.getAllImage(function (res) {
            var index = Math.floor(Math.random() * res.length);
            _this.product = res[index];
        });
    };
    HomeComponent.prototype.logout = function () {
        this._service.logout();
        this._router.navigate(['']);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "span {\n  color: #e05e55;\n  font-family: 'Berkshire Swash', cursive;\n  font-size: 18px;\n}\n\n#home {\n  background: url(/./../assets/image/pexels-photo-169573.jpeg) no-repeat center center;\n  -webkit-background-attachment: fixed;\n  background-attachment: fixed;\n  background-size: cover;\n  padding: 0;\n  position: relative;\n  height: 850px;\n  font-family: 'Berkshire Swash', cursive;\n}\n.panel {\n\tbackground-color: #333333;\n\topacity: 0.9;\n}\n.panel-login {\n\tborder-color: #ccc;\n\tbox-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);\n  \topacity: 0.82;\n}\n.panel-login>.panel-heading {\n\tcolor: #00415d;\n\tbackground-color: #333333;\n\topacity: 0.9;\n\tborder-color: #fff;\n\ttext-align:center;\n  margin: 0px;\n}\n.panel-login>.panel-heading a{\n\ttext-decoration: none;\n\tcolor:#59B2E6;\n\tfont-weight: bold;\n\tfont-size: 30px;\n\ttransition: all 0.1s linear;\n}\n.panel-login>.panel-heading a.active{\n\tcolor: #15c4a1;\n\tfont-size: 30px;\n}\n.panel-login>.panel-heading hr{\n\tmargin-top: 10px;\n\tmargin-bottom: 0px;\n\tclear: both;\n\tborder: 0;\n\theight: 1px;\n\tbackground-image: -o-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,0.15),rgba(0,0,0,0));\n}\n.panel-login input[type=\"text\"],.panel-login input[type=\"email\"],.panel-login input[type=\"password\"] {\n\theight: 45px;\n\tborder: 1px solid #ddd;\n\tfont-size: 25px;\n\tcolor: #fff;\n\tbackground-color: #333333;\n\topacity: 0.9;\n\ttransition: all 0.1s linear;\n}\n.panel-login input:hover,\n.panel-login input:focus {\n\toutline:none;\n\tbox-shadow: none;\n\tborder-color: #ccc;\n}\n.btn-login {\n\tbackground-color: #59B2E0;\n\tcolor: #fff;\n\tfont-size: 20px;\n\theight: auto;\n\tfont-weight: bold;\n\tpadding: 14px 0;\n\ttext-transform: uppercase;\n\tborder-color: #59B2E6;\n}\n.btn-login:hover,\n.btn-login:focus {\n\tcolor: #fff;\n\tbackground-color: #53A3CD;\n\tborder-color: #53A3CD;\n}\n.forgot-password {\n\ttext-decoration: underline;\n\tcolor: #888;\n}\n.forgot-password:hover,\n.forgot-password:focus {\n\ttext-decoration: underline;\n\tcolor: #666;\n}\n\n.btn-register {\n\tbackground-color: #1CB94E;\n\toutline: none;\n\tcolor: #fff;\n\tfont-size: 20px;\n\theight: auto;\n\tfont-weight: bold;\n\tpadding: 14px 0;\n\ttext-transform: uppercase;\n\tborder-color: #1CB94A;\n}\n.btn-register:hover,\n.btn-register:focus {\n\tcolor: #fff;\n\tbackground-color: #1CA347;\n\tborder-color: #1CA347;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"utf-8\">\n  <title></title>\n  <link href=\"https://fonts.googleapis.com/css?family=Concert+One\" rel=\"stylesheet\">\n    <link href=\"https://fonts.googleapis.com/css?family=Berkshire+Swash\" rel=\"stylesheet\">\n</head>\n<body>\n  <section id=\"home\" class=\"tt-fullHeight\" data-stellar-vertical-offset=\"50\" data-stellar-background-ratio=\"0.2\">\n    <br><br><br>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 col-md-offset-3\">\n          <div class=\"panel panel-login\">\n            <div class=\"panel-heading\">\n              <div class=\"row\">\n                <div class=\"col-xs-6\">\n                  <a href=\"#\" class=\"active\" id=\"login-form-link\">Login</a>\n                </div>\n                <div class=\"col-xs-6\">\n                  <a href=\"#\" id=\"register-form-link\">Register</a>\n                </div>\n              </div>\n              <hr>\n            </div>\n            <div class=\"panel-body\">\n              <div class=\"row\">\n                <div class=\"col-lg-12\">\n                  <form id=\"login-form\" (submit)=\"login()\" #formData2=\"ngForm\" style=\"display: block;\">\n                    <div class=\"form-group\">\n                      \n                      <input type=\"text\" name=\"email\" [(ngModel)]=\"user_login.email\" required pattern=\"[_a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]*\\.([a-z]{2,4})\" class=\"form-control\" placeholder=\"Email\"\n                      #login_email=\"ngModel\">\n                    </div>\n                    <div class=\"alert alert-warning\" *ngIf = \"login_email.invalid && (login_email.dirty || login_email.touched)\">\n                          <strong>Warning! please fill in your email !!!</strong>\n                    </div>\n\n\n                    <div class=\"form-group\">\n                      <input type=\"password\" name=\"password\" [(ngModel)]=\"user_login.password\" required minlength=\"5\"\n                      id=\"password\" class=\"form-control\" placeholder=\"Password\"\n                      #login_password=\"ngModel\">\n                    </div>\n                    <div class=\"alert alert-danger\" *ngIf = \"login_password.invalid && (login_password.dirty || login_password.touched)\">\n                        <strong>A Wow! password is required !!!</strong>\n                    </div>\n\n                    <div class=\"form-group\">\n                      <div class=\"row\">\n                        <div class=\"col-sm-6 col-sm-offset-3\">\n                          <input type=\"submit\" name=\"login-submit\" id=\"login-submit\" tabindex=\"4\" class=\"form-control btn btn-login\" value=\"Log In\">\n                        </div>\n                      </div>\n                    </div>\n                  </form>\n\n\n                  <!-- Registration Section  -->\n                  <form id=\"register-form\" (submit)=\"register()\" #formData1=\"ngForm\" style=\"display: none;\" >\n                    <div class=\"form-group\">\n                      <input type=\"text\" [(ngModel)]=\"user_reg.userName\" required minlength=\"3\" #userName=\"ngModel\" class=\"form-control\" name=\"userName\" placeholder=\"User Name\">\n                    </div>\n                    <div class=\"alert alert-warning\" *ngIf = \"userName.invalid && (userName.dirty || userName.touched)\">\n                        <strong>Warning! user name is required and must be 3 characters long !!!\n                        </strong>\n                    </div>\n\n                    <div class=\"form-group\">\n                      <input type=\"email\" [(ngModel)]=\"user_reg.email\" required pattern=\"[_a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]*\\.([a-z]{2,4})\" #email=\"ngModel\" name=\"email\" class=\"form-control\" placeholder=\"Email Address\">\n                    </div>\n                    <div class=\"alert alert-warning\" *ngIf = \"email.invalid && (email.dirty || email.touched)\">\n                        <strong>A Wow! email is required and checking the format !!!</strong>\n                    </div>\n\n                    <div class=\"form-group\">\n                      <input type=\"password\" name=\"password\" [(ngModel)]=\"user_reg.password\" #password=\"ngModel\" required minlength=\"5\" class=\"form-control\" placeholder=\"Password\">\n                    </div>\n                    <div class=\"alert alert-danger\" *ngIf = \"userName.invalid && (userName.dirty || userName.touched)\">\n                        <strong>A Wow! password is required and must be 5 characters long !!!</strong>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <input type=\"password\" [(ngModel)]=\"pass_confir\" required minlength=\"9\" #pw_confirm=\"ngModel\" pattern=\"{{user_reg.password}}\" placeholder=\"password confirmation\" class=\"form-control\" name=\"pw_confirm\">\n                    </div>\n                    <div class=\"alert alert-danger\" *ngIf = \"pw_confirm.invalid && (pw_confirm.dirty || pw_confirm.touched)\">\n                        <strong>A Wow! password is not matched !!!</strong>\n                    </div>\n\n                    <div class=\"form-group\">\n                      <div class=\"row\">\n                        <div class=\"col-sm-6 col-sm-offset-3\">\n                          <input type=\"submit\" name=\"register-submit\" id=\"register-submit\" tabindex=\"4\" class=\"form-control btn btn-register\" value=\"Register Now\">\n                        </div>\n                      </div>\n                    </div>\n                  </form>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</body>\n\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(_service, _router) {
        this._service = _service;
        this._router = _router;
        this.user_reg = {
            userName: "",
            email: "",
            password: ""
        };
        this.user_login = {
            email: "",
            password: ""
        };
        this.err_message = {
            email: "",
            password: ""
        };
    }
    LoginComponent.prototype.register = function () {
        var _this = this;
        console.log("from com register: ", this.user_reg);
        this._service.register(this.user_reg, function (res) {
            if (res.success === "success") {
                _this._router.navigate(['/create']);
            }
            else {
                _this.err_message.email = "This email has been registered.";
            }
            _this.user_reg = {
                userName: "",
                email: "",
                password: ""
            };
            _this.pass_confir = "";
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this._service.login(this.user_login, function (res) {
            if (res.message == "success") {
                console.log("ts login");
                _this._router.navigate(['/create']);
                _this.err_message.email = null;
            }
            else {
                _this.err_message.email = res.message;
            }
        });
        this.user_login = {
            email: "",
            password: ""
        };
    };
    LoginComponent.prototype.ngOnInit = function () {
        // jquery for the login form
        $(function () {
            $('#login-form-link').click(function (e) {
                $("#login-form").delay(100).fadeIn(100);
                $("#register-form").fadeOut(100);
                $('#register-form-link').removeClass('active');
                $(this).addClass('active');
                e.preventDefault();
            });
            $('#register-form-link').click(function (e) {
                $("#register-form").delay(100).fadeIn(100);
                $("#login-form").fadeOut(100);
                $('#login-form-link').removeClass('active');
                $(this).addClass('active');
                e.preventDefault();
            });
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainService = (function () {
    function MainService(_http) {
        this._http = _http;
        this.quesitons = [];
        this.products = [];
        if (localStorage.user !== undefined) {
            this.user = JSON.parse(localStorage.user);
        }
    }
    // create quesiton
    MainService.prototype.create = function (questions, callback) {
        console.log(questions);
        console.log("create service route");
        this._http.post('/questions/user/' + this.user._id, questions).subscribe(function (res) {
            callback(res);
        }, function (err) {
            console.log(err);
        });
    };
    MainService.prototype.createPro = function (products, callback) {
        console.log(products);
        this._http.post('/products/user/' + this.user._id, products)
            .subscribe(function (res) {
            console.log("from service create product", res);
            callback(res);
        }, function (err) {
            console.log(err);
        });
    };
    // create answer
    MainService.prototype.createAns = function (answer, quesiton_id, user_id) {
        console.log(answer);
        console.log("answer create service route");
        this._http.post('/answers/' + quesiton_id + '/' + user_id, answer)
            .subscribe(function (res) {
            console.log('from service create answer', res);
        }, function (err) {
            console.log(err);
        });
    };
    MainService.prototype.searchQuestion = function (search, callback) {
        this._http.post('/search', { search: search }).subscribe(function (res) {
            console.log("service search =>", res);
            callback(res.json());
        }, function (err) {
            console.log("service search function err");
        });
    };
    MainService.prototype.update = function (id, product, callback) {
        this._http.put('/products/' + id, product).subscribe(function (res) {
            console.log("service update");
            callback(res.json());
        }, function (err) {
            console.log("service update err");
        });
    };
    MainService.prototype.like = function (id, callback) {
        console.log(id);
        this._http.post('/like/' + id, {}).subscribe(function (res) {
            console.log(res.json());
            callback(res.json());
        }, function (err) {
            console.log(err);
        });
    };
    MainService.prototype.delete = function (id, callback) {
        console.log('delete method');
        this._http.delete('/questions/' + id).subscribe(function (res) {
            console.log(res.json());
            callback(res.json());
        }, function (err) {
            console.log(err);
        });
    };
    MainService.prototype.deletePro = function (id, callback) {
        console.log('delete prod');
        this._http.delete('/products/' + id).subscribe(function (res) {
            console.log(res.json());
            callback(res.json());
        }, function (err) {
            console.log(err);
        });
    };
    // retrieve all quesitons
    MainService.prototype.retrieveQuestions = function (callback) {
        this._http.get('/questions').subscribe(function (res) {
            callback(res.json());
        }, function (err) {
            console.log(err);
        });
    };
    // retrieve all create products 
    MainService.prototype.retrieveProducts = function (callback) {
        this._http.get('/products').subscribe(function (res) {
            console.log(res);
            callback(res.json());
        }, function (err) {
            console.log(err);
        });
    };
    // register user
    MainService.prototype.register = function (data, callback) {
        var _this = this;
        this._http.post("/register", data).subscribe(function (res) {
            console.log("from service register: ", res.json());
            callback(res.json());
            if (res.json().success = "success") {
                _this.user = res.json().user;
                localStorage.user = JSON.stringify(res.json().user);
            }
        }, function (err) {
            console.log(err);
        });
    };
    MainService.prototype.login = function (data, callback) {
        var _this = this;
        this._http.post("/login", data).subscribe(function (res) {
            callback(res.json());
            console.log(res.json());
            _this.user = res.json().user;
            console.log(_this.user);
            localStorage.user = JSON.stringify(res.json().user);
        }, function (err) {
            console.log("error from login service: ", err);
        });
    };
    MainService.prototype.retrieveOne = function (id, callback) {
        // console.log("service one quesiton id: ", id);
        this._http.get('/question/' + id).subscribe(function (res) {
            // console.log(res.json());
            callback(res.json());
        });
    };
    // contact poster route
    MainService.prototype.findPoster = function (id, callback) {
        this._http.get('/products/' + id + '/user').subscribe(function (res) {
            callback(res.json());
        }, function (err) {
            console.log("contact can't find this poster");
        });
    };
    MainService.prototype.logout = function () {
        console.log("logout service");
        localStorage.removeItem("user");
        console.log(localStorage.user);
        this.user = null;
    };
    // get all products display 
    MainService.prototype.getAllImage = function (callback) {
        this._http.get('/products').subscribe(function (res) {
            callback(res.json());
        }, function (err) {
            console.log("service can't get display");
        });
    };
    MainService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "../../../../../src/app/new-question/new-question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  width: 80%;\n}\n.box {\n  margin-top: 10px;\n}\nh1 {\n  font-family: 'Berkshire Swash', cursive;\n  color: #fff;\n}\nlabel {\n  color: blanchedalmond;\n  font: bold;\n  font-family: 'Berkshire Swash', cursive;\n  font-size: 20px;\n  text-shadow: 2px 2px gray;\n}\nbody {\n  background: url(/./../assets/image/pexels-photo-217316.jpeg) no-repeat center center;\n  -webkit-background-attachment: fixed;\n  background-attachment: fixed;\n  background-size: cover;\n  padding: 0;\n  position: relative;\n  height: 830px;\n}\n.alert-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n  margin-left: 206px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-question/new-question.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"utf-8\">\n  <title></title>\n  <link href=\"https://fonts.googleapis.com/css?family=Fugaz+One\" rel=\"stylesheet\">\n</head>\n\n<body>\n  <div class=\"container\">\n    <div class=\"form-group\">\n      <div class=\"box\">\n        <button (click)=\"logout()\" class=\"btn btn-info\" style=\"float: right; font-family: 'Fugaz One', cursive;\">Log Out</button>\n      </div>\n      <div class=\"box\">\n        <button id=\"hover\" class=\"btn btn-warning\" style=\"font-family: 'Fugaz One', cursive;\"><a [routerLink]=\"['/create']\">Home</a></button>\n      </div>\n      <h1>New Question</h1>\n        <div class=\"panel-body\">\n          <form class=\"form-horizontal\" (submit)=\"creatQues()\" #quesData=\"ngForm\">\n            <div class=\"form-group\">\n              <label class=\"control-label col-sm-2\">Question:</label>\n              <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter question.....\" name=\"content\"\n                [(ngModel)] = \"newQues.content\"\n                required minlength=\"10\"\n                #questionData=\"ngModel\">\n              </div>\n            </div>\n            <div class=\"alert alert-warning\" *ngIf = \"questionData.invalid && (questionData.dirty || questionData.touched)\">\n                <strong>\n                  Warning! please fill in your question !!!\n                </strong>\n            </div>\n           \n\n            <div class=\"form-group\">\n              <label class=\"control-label col-sm-2\">Description(Optional):</label>\n              <div class=\"col-sm-10\">\n                <textarea class=\"form-control\" rows=\"5\" name=\"description\"\n                [(ngModel)] = \"newQues.description\"\n                ></textarea>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <div class=\"col-sm-offset-2 col-sm-10\">\n              <button type=\"submit\" class=\"btn btn-success\" style=\"font-family: 'Fugaz One', cursive;\"\n              [disabled]=\"!quesData.valid\">Submit</button>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"col-sm-offset-2 col-sm-10\">\n              <button class=\"btn btn-danger\"\n              style=\"font-family: 'Fugaz One', cursive;\"><a [routerLink]=\"['/home']\">Cancel</a></button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</body>\n\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/new-question/new-question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewQuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewQuestionComponent = (function () {
    function NewQuestionComponent(_service, _router) {
        this._service = _service;
        this._router = _router;
        this.newQues = {
            content: "",
            description: ""
        };
    }
    NewQuestionComponent.prototype.creatQues = function () {
        var _this = this;
        this._service.create(this.newQues, function (res) {
            console.log(res);
            console.log("new question data sending");
            _this.newQues = {
                content: "",
                description: ""
            };
        });
        this._router.navigate(['/create']);
    };
    NewQuestionComponent.prototype.ngOnInit = function () {
        if (this._service.user == null) {
            this._router.navigate(['']);
        }
    };
    NewQuestionComponent.prototype.logout = function () {
        this._service.logout();
        this._router.navigate(['']);
    };
    NewQuestionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new-question',
            template: __webpack_require__("../../../../../src/app/new-question/new-question.component.html"),
            styles: [__webpack_require__("../../../../../src/app/new-question/new-question.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NewQuestionComponent);
    return NewQuestionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/show/show.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#logout {\n  margin-left: 1010px;\n  height: 40px;\n  font-family: 'Berkshire Swash', cursive;\n}\n\n#display{\n  background-color: hsla(0, 100%, 30%, 0.3);\n  padding: 10px;\n  border-radius: 10px;\n  border: 1px solid black;  \n}\n\nh1, h2 {\n  font-family: 'Berkshire Swash', cursive;\n  font: bold;\n  font-size: 60px;\n}\n\nnav {\n  border-radius: 0px;\n}\n\n.navbar-inverse .navbar-nav>li>a {\n    color: #fff;\n    text-decoration: none;\n}\n\nbody {\n  background: url(/assets/image/pexels-photo-707583.jpeg) no-repeat center center;\n  -webkit-background-attachment: fixed;\n  background-attachment: fixed;\n  background-size: cover;\n  padding: 0;\n  position: relative;\n  height: 800px;\n}\n\ntable {\n  font-size: 25px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/show/show.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\">\n    <title></title>\n  </head>\n  <body>\n    <nav class=\"navbar navbar-inverse\">\n        <div class=\"container-fluid\">\n          <ul class=\"nav navbar-nav\">\n            <li class=\"active\"><a [routerLink]=\"['/create']\">Home</a></li>\n            <li class=\"active\"><a [routerLink]=\"['/answer', question._id]\">Answer this quesiton</a></li>\n            <button id=\"logout\" class=\"btn btn-danger\"><a (click)=\"logout()\">Log Out</a></button>\n          </ul>\n        </div>\n    </nav>\n    <div class=\"container\">\n      <div id=\"display\" class=\"form-group\">\n          <h1>{{question.content}}</h1>\n          <h2>{{question.description}}</h2>\n      </div>\n\n      <table class=\"table\">\n        <thead class=\"thead-inverse\">\n          <tr>\n            <th>Author:</th>\n            <th>Answer:</th>\n            <th>Detail (Support Point):</th>\n            <th>Likes</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let one of question._answers\">\n            <td>{{user.userName}}</td>\n            <td>{{one.content}}</td>\n            <td>{{one.detail}}</td>\n            <td>{{one.likes}}\n              <button class=\"btn btn-warning\" (click) = \"like(one._id)\" >Like!</button></td>\n              <!-- {{one._id}} -->\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </body>\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/show/show.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShowComponent = (function () {
    function ShowComponent(_service, _router, _route) {
        this._service = _service;
        this._router = _router;
        this._route = _route;
        this.question = {
            content: "",
            description: "",
            _id: ""
        };
        this.answer = {
            content: "",
            detail: "",
            likes: Number
        };
    }
    ShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this._service.user;
        this._route.paramMap.subscribe(function (params) {
            // console.log(params);
            _this._service.retrieveOne(params.get("id"), function (res) {
                _this.question = res;
                console.log(_this.question);
            });
        });
    };
    ShowComponent.prototype.like = function (id) {
        var _this = this;
        console.log("like method");
        this._service.like(id, function (res) {
            _this.question = res;
        });
        // get id from url route 
        this._route.paramMap.subscribe(function (params) {
            _this.id = params.get("id");
            _this._service.retrieveOne(params.get("id"), function (res) {
                _this.question = res;
                console.log(res);
            });
        });
    };
    ShowComponent.prototype.logout = function () {
        this._service.logout();
        this._router.navigate(['']);
    };
    ShowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-show',
            template: __webpack_require__("../../../../../src/app/show/show.component.html"),
            styles: [__webpack_require__("../../../../../src/app/show/show.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ShowComponent);
    return ShowComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map