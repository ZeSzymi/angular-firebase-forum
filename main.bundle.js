webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin-topic/admin-topic.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin-topic/admin-topic.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"overflow-y:scroll;height:85%\">\r\n    <div class=\"col-md-12\" >\r\n      <h1 class=\"text-center py-1\">Today Topics</h1>\r\n      <div class=\"list-group\">\r\n          <a style=\"cursor: pointer; background-color: #2d3436;\" class=\"list-group-item list-group-item-action my-2\" *ngFor='let topic of topics; let i = index'>\r\n            <div class=\"row\" style=\"color:white\">\r\n                <div class=\"col-md-4\"><img class=\"img-thumbnail\" style=\"height: 100px;width: 200px\" src=\"{{ topic.imagePath}}\"></div>\r\n                <div class=\"col-md-2\"><h3>{{ topic.name }}</h3></div>\r\n                <div class=\"col-md-5\">{{ topic.content }}</div>\r\n                <div class=\"col-md-1\"><button class=\"btn btn-danger\">X</button></div>\r\n            </div>  \r\n          </a>\r\n        </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/admin-topic/admin-topic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminTopicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_admin_topic_service__ = __webpack_require__("./src/app/services/admin-topic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminTopicComponent = /** @class */ (function () {
    function AdminTopicComponent(adminTopicService) {
        this.adminTopicService = adminTopicService;
        this.topics = [];
    }
    AdminTopicComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminTopicService.getTopics();
        this.adminTopicService.topicsSubject.subscribe(function (topics) { return _this.topics = topics; });
    };
    AdminTopicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-admin-topic',
            template: __webpack_require__("./src/app/admin-topic/admin-topic.component.html"),
            styles: [__webpack_require__("./src/app/admin-topic/admin-topic.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_admin_topic_service__["a" /* AdminTopicService */]])
    ], AdminTopicComponent);
    return AdminTopicComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__admin_topic_admin_topic_component__ = __webpack_require__("./src/app/admin-topic/admin-topic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var appRoutes = [
    { path: 'admin-topics', component: __WEBPACK_IMPORTED_MODULE_0__admin_topic_admin_topic_component__["a" /* AdminTopicComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Montserrat');\r\nbody {\r\n    font-family: 'Montserrat', sans-serif;\r\n    color:#636e72;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"position: absolute; height:100%; width:100%\">\r\n    <app-header></app-header>\r\n\r\n    <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("./node_modules/firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1_firebase__["initializeApp"]({
            apiKey: 'AIzaSyC2n70iBA8iyyowjZcyBwtHLNm9AhmXdj4',
            authDomain: 'forum-742d6.firebaseapp.com'
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_admin_topic_service__ = __webpack_require__("./src/app/services/admin-topic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__forum_forum_module__ = __webpack_require__("./src/app/forum/forum.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_auth_module__ = __webpack_require__("./src/app/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_topic_storage_service__ = __webpack_require__("./src/app/services/topic-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__messanger_messanger_component__ = __webpack_require__("./src/app/messanger/messanger.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__admin_topic_admin_topic_component__ = __webpack_require__("./src/app/admin-topic/admin-topic.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__messanger_messanger_component__["a" /* MessangerComponent */],
                __WEBPACK_IMPORTED_MODULE_12__admin_topic_admin_topic_component__["a" /* AdminTopicComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_8__forum_forum_module__["a" /* ForumModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__auth_auth_module__["a" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__services_topic_storage_service__["a" /* TopicStorageService */], __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_0__services_admin_topic_service__["a" /* AdminTopicService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin_component__ = __webpack_require__("./src/app/auth/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("./src/app/auth/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var authRoutes = [
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_2__signin_signin_component__["a" /* SigninComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(authRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_routing_module__ = __webpack_require__("./src/app/auth/auth-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_signin_component__ = __webpack_require__("./src/app/auth/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__signin_signin_component__["a" /* SigninComponent */], __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__auth_routing_module__["a" /* AuthRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__["a" /* SharedModule */]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Log In</h1>\r\n  <form (ngSubmit)='onSubmit(form)' #form='ngForm'>\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleInputEmail1\">Email address</label>\r\n      <input type=\"email\" class=\"form-control\" name=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" ngModel>\r\n      <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleInputPassword1\">Password</label>\r\n      <input type=\"password\" class=\"form-control\" name='password' id=\"exampleInputPassword1\" placeholder=\"Password\" ngModel>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function (form) {
        this.authService.logUserIn(form.value.email, form.value.password);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__("./src/app/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/signin/signin.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h1>Sign In</h1>\r\n  <form (ngSubmit)='onSubmit(form)' #form='ngForm'>\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleInputEmail1\">Email address</label>\r\n      <input type=\"email\" class=\"form-control\" name=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" ngModel>\r\n      <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleInputPassword1\">Password</label>\r\n      <input type=\"password\" class=\"form-control\" name='password' id=\"exampleInputPassword1\" placeholder=\"Password\" ngModel>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SigninComponent = /** @class */ (function () {
    function SigninComponent(authService) {
        this.authService = authService;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.onSubmit = function (form) {
        this.authService.signUserIn(form.value.email, form.value.password);
    };
    SigninComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signin',
            template: __webpack_require__("./src/app/auth/signin/signin.component.html"),
            styles: [__webpack_require__("./src/app/auth/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/core/core-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_user_component__ = __webpack_require__("./src/app/core/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__ = __webpack_require__("./src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/core/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var coreRoutes = [
    { path: '', redirectTo: '/forum', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_0__user_user_component__["a" /* UserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__["a" /* AuthGuard */]] }
];
var CoreRoutingModule = /** @class */ (function () {
    function CoreRoutingModule() {
    }
    CoreRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forChild(coreRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__["a" /* AuthGuard */]]
        })
    ], CoreRoutingModule);
    return CoreRoutingModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user_component__ = __webpack_require__("./src/app/core/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_routing_module__ = __webpack_require__("./src/app/core/core-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messenger_messenger_component__ = __webpack_require__("./src/app/core/messenger/messenger.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("./src/app/core/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__("./src/app/core/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_1__user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_3__messenger_messenger_component__["a" /* MessengerComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__core_routing_module__["a" /* CoreRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".custom-toggler .navbar-toggler-icon {\r\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,102,203, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\");\r\n  }\r\n  \r\n.custom-toggler.navbar-toggler {\r\n    border-color: rgb(255,102,203);\r\n  } "

/***/ }),

/***/ "./src/app/core/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-dark \" style=\"background-color: #b2bec3; color: #2d3436\" >\r\n     <a class=\"navbar-brand\" style=\"color: #2d3436\" routerLink='/forum'><h1 >Forum</h1></a>\r\n      <button class=\"navbar-toggler\">\r\n            <span class='navbar-toggler-icon'></span>\r\n          </button>\r\n        \r\n          <div class=\"collapse navbar-collapse\">\r\n              <div class=\"col-sm-6\">\r\n                  <ul class=\"navbar-nav mr-auto\">\r\n                      <li class=\"nav-item\" *ngIf='isAuthenticated'><a style='cursor:pointer' class=\"nav-link text-dark\" routerLinkActive='active' routerLink='/user' >Add Topic</a></li>\r\n                    </ul>\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                    <ul class=\"navbar-nav mr-auto d-flex justify-content-end\">\r\n                        <li *ngIf='isAuthenticated' class=\"nav-item\"><a style='cursor:pointer' class=\"nav-link text-dark\" (click)='logOut()'>Log Out</a></li>\r\n                        <li *ngIf='!isAuthenticated' class=\"nav-item\" ><a style='cursor:pointer' class=\"nav-link text-dark\" routerLinkActive='active' routerLink='/login'>Login</a></li>\r\n                        <li *ngIf='!isAuthenticated' class=\"nav-item\"><a style='cursor:pointer' class=\"nav-link text-dark\" routerLinkActive='active' routerLink='/signin' >Sign in</a></li>\r\n                    </ul>\r\n            </div>\r\n          </div>\r\n        </nav>"

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.authenticated.subscribe(function (status) { _this.isAuthenticated = status; console.log(status); });
    };
    HeaderComponent.prototype.logOut = function () {
        this.authService.logUserOut();
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/core/header/header.component.html"),
            styles: [__webpack_require__("./src/app/core/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  home works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/core/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/core/home/home.component.html"),
            styles: [__webpack_require__("./src/app/core/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/core/messenger/messenger.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/messenger/messenger.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  messenger works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/core/messenger/messenger.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessengerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessengerComponent = /** @class */ (function () {
    function MessengerComponent() {
    }
    MessengerComponent.prototype.ngOnInit = function () {
    };
    MessengerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-messenger',
            template: __webpack_require__("./src/app/core/messenger/messenger.component.html"),
            styles: [__webpack_require__("./src/app/core/messenger/messenger.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessengerComponent);
    return MessengerComponent;
}());



/***/ }),

/***/ "./src/app/core/user/user.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <form (ngSubmit)='onSubmit(form)' #form='ngForm'>\r\n        <div class=\"form-group\">\r\n          <label for=\"exampleInputEmail1\">Topic Name</label>\r\n          <input type=\"text\" name='topic' class=\"form-control\" aria-describedby=\"enter topic name\" ngModel >\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"exampleFormControlTextarea1\">Content</label>\r\n          <textarea class=\"form-control\" name='content' id=\"exampleFormControlTextarea1\" ngModel rows=\"3\"></textarea>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"exampleInputPassword1\">Image Path</label>\r\n          <input type=\"text\" name='imagePath' class=\"form-control\" id=\"exampleInputPassword1\" ngModel [(ngModel)]='imageSrc'>\r\n          <img src=\"{{ imageSrc }}\">\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/core/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_topic_storage_service__ = __webpack_require__("./src/app/services/topic-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forum_model_topic_model__ = __webpack_require__("./src/app/forum/model/topic.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = /** @class */ (function () {
    function UserComponent(topicStorageService) {
        this.topicStorageService = topicStorageService;
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.onSubmit = function (form) {
        var topic = new __WEBPACK_IMPORTED_MODULE_2__forum_model_topic_model__["a" /* Topic */](form.value.topic, form.value.content, form.value.imagePath, []);
        this.topicStorageService.addTopic(topic);
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("./src/app/core/user/user.component.html"),
            styles: [__webpack_require__("./src/app/core/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_topic_storage_service__["a" /* TopicStorageService */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/forum/forum-item/comment/comment.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forum/forum-item/comment/comment.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]='authenticated'>\r\n    <button class=\"btn btn-dark mt-2\" (click)='addCommentState()'>Add Comment</button>\r\n    <textarea class=\"form-control my-2\" id=\"exampleTextarea\" rows=\"3\" *ngIf='addComment' #textArea></textarea>\r\n</ng-template>\r\n<ul class=\"list-group\">\r\n    <li class=\"list-group-item list-group-item-dark my-1\" *ngFor='let comment of comments'> {{ comment.content }} || {{ comment.user }}</li>\r\n</ul>"

/***/ }),

/***/ "./src/app/forum/forum-item/comment/comment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_comment_storage_service__ = __webpack_require__("./src/app/services/comment-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_comment_model__ = __webpack_require__("./src/app/forum/model/comment.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CommentComponent = /** @class */ (function () {
    function CommentComponent(commentStorageService, route, authService) {
        this.commentStorageService = commentStorageService;
        this.route = route;
        this.authService = authService;
        this.comments = [];
        this.addComment = true;
    }
    CommentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCommentSubscription = this.commentStorageService.getSpecificCommentSubject.subscribe(function (comments) {
            _this.comments = comments;
        });
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.commentStorageService.getComments(+params['id']);
        });
        this.authenticated = this.authService.isAuthenticated();
        this.authSubscription = this.authService.authenticated.subscribe(function (status) { _this.authenticated = status; });
    };
    CommentComponent.prototype.addCommentState = function () {
        console.log(this.textArea.nativeElement.value);
        this.comments.push(new __WEBPACK_IMPORTED_MODULE_2__model_comment_model__["a" /* Comment */](this.textArea.nativeElement.value, this.authService.getUserName()));
        this.commentStorageService.addComment(this.id, this.comments);
    };
    CommentComponent.prototype.ngOnDestroy = function () {
        this.getCommentSubscription.unsubscribe();
        this.authSubscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_9" /* ViewChild */])('textArea'),
        __metadata("design:type", Object)
    ], CommentComponent.prototype, "textArea", void 0);
    CommentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
            selector: 'app-comment',
            template: __webpack_require__("./src/app/forum/forum-item/comment/comment.component.html"),
            styles: [__webpack_require__("./src/app/forum/forum-item/comment/comment.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_comment_storage_service__["a" /* CommentStorageService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]])
    ], CommentComponent);
    return CommentComponent;
}());



/***/ }),

/***/ "./src/app/forum/forum-item/forum-item.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forum/forum-item/forum-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container p-3 my-3 border border-secondary\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <img class=\"w-100 h-100\" src='{{ topic.imagePath }}'>\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n      <div class=\"col-md-12\"><h1 class=\"text-center thumbnail-image\">{{ topic.name }}</h1></div>\r\n      <div class=\"col-md-12\"><h5>{{ topic.content }}</h5></div>\r\n    </div>\r\n  </div>\r\n  \r\n  <app-comment></app-comment>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/forum/forum-item/forum-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_comment_model__ = __webpack_require__("./src/app/forum/model/comment.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_topic_model__ = __webpack_require__("./src/app/forum/model/topic.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_topic_storage_service__ = __webpack_require__("./src/app/services/topic-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForumItemComponent = /** @class */ (function () {
    function ForumItemComponent(route, topicStorageService) {
        this.route = route;
        this.topicStorageService = topicStorageService;
        this.topic = new __WEBPACK_IMPORTED_MODULE_1__model_topic_model__["a" /* Topic */]('', '', '', [new __WEBPACK_IMPORTED_MODULE_0__model_comment_model__["a" /* Comment */]('', '')]);
    }
    ForumItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getSpecificSubscription = this.topicStorageService.getSpecificTopicSubject.subscribe(function (response) { _this.topic = response; });
        this.route.params.subscribe(function (params) {
            _this.topicStorageService.getTopic(+params['id']);
        });
    };
    ForumItemComponent.prototype.ngOnDestroy = function () {
        this.getSpecificSubscription.unsubscribe();
    };
    ForumItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'app-forum-item',
            template: __webpack_require__("./src/app/forum/forum-item/forum-item.component.html"),
            styles: [__webpack_require__("./src/app/forum/forum-item/forum-item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_topic_storage_service__["a" /* TopicStorageService */]])
    ], ForumItemComponent);
    return ForumItemComponent;
}());



/***/ }),

/***/ "./src/app/forum/forum-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forum_item_forum_item_component__ = __webpack_require__("./src/app/forum/forum-item/forum-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forum_component__ = __webpack_require__("./src/app/forum/forum.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var forumRoutes = [
    { path: 'forum', component: __WEBPACK_IMPORTED_MODULE_2__forum_component__["a" /* ForumComponent */] },
    { path: 'forum-item/:id', component: __WEBPACK_IMPORTED_MODULE_0__forum_item_forum_item_component__["a" /* ForumItemComponent */] }
];
var ForumRoutingModule = /** @class */ (function () {
    function ForumRoutingModule() {
    }
    ForumRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forChild(forumRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */]]
        })
    ], ForumRoutingModule);
    return ForumRoutingModule;
}());



/***/ }),

/***/ "./src/app/forum/forum.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forum/forum.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"container\" style=\"overflow-y:scroll;height:85%\">\r\n        <div class=\"col-md-12\" >\r\n          <h1 class=\"text-center py-1\">Today Topics</h1>\r\n          <div class=\"list-group\">\r\n              <a style=\"cursor: pointer; background-color: #2d3436;\" class=\"list-group-item list-group-item-action my-2\" *ngFor='let topic of topics; let i = index' [routerLink]='[\"/forum-item\", i]'>\r\n                <div class=\"row\" style=\"color:white\">\r\n                    <div class=\"col-md-4\"><img class=\"img-thumbnail\" style=\"height: 100px;width: 200px\" src=\"{{ topic.imagePath}}\"></div>\r\n                    <div class=\"col-md-2\"><h3>{{ topic.name }}</h3></div>\r\n                    <div class=\"col-md-6\">{{ topic.content }}</div>\r\n                </div>  \r\n              </a>\r\n            </div>\r\n        </div>\r\n      </div>\r\n"

/***/ }),

/***/ "./src/app/forum/forum.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_topic_storage_service__ = __webpack_require__("./src/app/services/topic-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForumComponent = /** @class */ (function () {
    function ForumComponent(topicStorageService) {
        this.topicStorageService = topicStorageService;
        this.topics = [];
    }
    ForumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.topicStorageService.getTopicsSubject.subscribe(function (response) {
            _this.topics = response;
        });
        this.topicStorageService.getTopics();
    };
    ForumComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-forum',
            template: __webpack_require__("./src/app/forum/forum.component.html"),
            styles: [__webpack_require__("./src/app/forum/forum.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_topic_storage_service__["a" /* TopicStorageService */]])
    ], ForumComponent);
    return ForumComponent;
}());



/***/ }),

/***/ "./src/app/forum/forum.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__forum_routing_module__ = __webpack_require__("./src/app/forum/forum-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forum_component__ = __webpack_require__("./src/app/forum/forum.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forum_item_forum_item_component__ = __webpack_require__("./src/app/forum/forum-item/forum-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forum_item_comment_comment_component__ = __webpack_require__("./src/app/forum/forum-item/comment/comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_comment_storage_service__ = __webpack_require__("./src/app/services/comment-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ForumModule = /** @class */ (function () {
    function ForumModule() {
    }
    ForumModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__forum_component__["a" /* ForumComponent */], __WEBPACK_IMPORTED_MODULE_4__forum_item_forum_item_component__["a" /* ForumItemComponent */], __WEBPACK_IMPORTED_MODULE_5__forum_item_comment_comment_component__["a" /* CommentComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__forum_routing_module__["a" /* ForumRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__["a" /* SharedModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_comment_storage_service__["a" /* CommentStorageService */]]
        })
    ], ForumModule);
    return ForumModule;
}());



/***/ }),

/***/ "./src/app/forum/model/comment.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comment; });
var Comment = /** @class */ (function () {
    function Comment(content, user) {
        this.content = content;
        this.user = user;
    }
    return Comment;
}());



/***/ }),

/***/ "./src/app/forum/model/topic.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Topic; });
var Topic = /** @class */ (function () {
    function Topic(name, content, imagePath, comment) {
        this.name = name;
        this.content = content;
        this.imagePath = imagePath;
        this.comment = comment;
    }
    return Topic;
}());



/***/ }),

/***/ "./src/app/messanger/messanger.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/messanger/messanger.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-white bg-dark\" style=\"max-width: 18rem;\">\r\n  <div class=\"card-header\">Header</div>\r\n    <div class=\"card-body\">\r\n      <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n      <input class=\"form-control\">\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/messanger/messanger.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessangerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessangerComponent = /** @class */ (function () {
    function MessangerComponent() {
    }
    MessangerComponent.prototype.ngOnInit = function () {
    };
    MessangerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-messanger',
            template: __webpack_require__("./src/app/messanger/messanger.component.html"),
            styles: [__webpack_require__("./src/app/messanger/messanger.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessangerComponent);
    return MessangerComponent;
}());



/***/ }),

/***/ "./src/app/services/admin-topic.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminTopicService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminTopicService = /** @class */ (function () {
    function AdminTopicService(http) {
        this.http = http;
        this.pathGet = 'http://localhost:3001/api/topics/show';
        this.pathPost = 'http://localhost:3001/api/topics/add';
        this.adminTopics = [];
        this.topicsSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["a" /* Subject */]();
    }
    AdminTopicService.prototype.addTopic = function (topic) {
        var _this = this;
        this.http.get(this.pathGet).subscribe(function (response) {
            _this.adminTopics = response.json();
            _this.adminTopics.push(topic);
            _this.http.post(_this.pathPost, _this.adminTopics);
        });
    };
    AdminTopicService.prototype.addTopics = function (topics) {
        console.log(topics);
        this.http.post(this.pathPost, topics).subscribe(function (res) { return console.log(res); });
    };
    AdminTopicService.prototype.removeTopic = function (index) {
        var _this = this;
        this.http.get(this.pathGet).subscribe(function (response) {
            _this.adminTopics = response.json();
            _this.adminTopics.splice(index, 1);
            _this.http.post(_this.pathPost, _this.adminTopics);
        });
    };
    AdminTopicService.prototype.getTopics = function () {
        var _this = this;
        this.http.get(this.pathGet).subscribe(function (response) {
            _this.adminTopics = response.json();
            console.log(_this.adminTopics);
            _this.topicsSubject.next(_this.adminTopics);
        });
    };
    AdminTopicService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], AdminTopicService);
    return AdminTopicService;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        console.log(this.authService.isAuthenticated());
        return this.authService.isAuthenticated();
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("./node_modules/firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(router, http) {
        this.router = router;
        this.http = http;
        this.token = null;
        this.authenticated = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    AuthService.prototype.signUserIn = function (email, password) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().createUserWithEmailAndPassword(email, password).catch(function (error) { console.log(error); }).then(function (success) { _this.router.navigate(['/login']); });
    };
    /*storeUserName(userName) {
        http.post('https://forum-742d6.firebaseio.com/topics.json');
    }*/
    AuthService.prototype.logUserIn = function (email, password) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signInWithEmailAndPassword(email, password).catch(function (error) { console.log(error); }).then(function () { _this.getToken(); _this.userName = email; _this.router.navigate(['/']); });
    };
    AuthService.prototype.logUserOut = function () {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signOut();
        this.token = null;
        this.onAuthenticationChange();
    };
    AuthService.prototype.getToken = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.getIdToken().then(function (token) {
            _this.token = token;
            _this.onAuthenticationChange();
        });
    };
    AuthService.prototype.getUserName = function () {
        return this.userName;
    };
    AuthService.prototype.onAuthenticationChange = function () {
        this.authenticated.next(this.isAuthenticated());
    };
    AuthService.prototype.getTokenId = function () {
        return this.token;
    };
    AuthService.prototype.isAuthenticated = function () {
        if (this.token == null) {
            return false;
        }
        else {
            return true;
        }
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/comment-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__forum_model_comment_model__ = __webpack_require__("./src/app/forum/model/comment.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CommentStorageService = /** @class */ (function () {
    function CommentStorageService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.getSpecificCommentSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
    }
    CommentStorageService.prototype.getComments = function (index) {
        var _this = this;
        this.http.get('https://forum-742d6.firebaseio.com/topics.json').subscribe(function (response) {
            var comments = [];
            if (response.json()[index].comment) {
                for (var i = 0; i < response.json()[index].comment.length; i += 1) {
                    comments.push(new __WEBPACK_IMPORTED_MODULE_1__forum_model_comment_model__["a" /* Comment */](response.json()[index].comment[i].content, response.json()[index].comment[i].user));
                }
                _this.getSpecificCommentSubject.next(comments);
            }
        });
    };
    CommentStorageService.prototype.addComment = function (index, comment) {
        var _this = this;
        console.log(index);
        this.http.put('https://forum-742d6.firebaseio.com/topics/' + index + '/comment.json?auth=' +
            this.authService.getTokenId(), comment).subscribe(function (response) {
            _this.getSpecificCommentSubject.next(response.json());
        });
    };
    CommentStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]])
    ], CommentStorageService);
    return CommentStorageService;
}());



/***/ }),

/***/ "./src/app/services/topic-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__forum_model_topic_model__ = __webpack_require__("./src/app/forum/model/topic.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TopicStorageService = /** @class */ (function () {
    function TopicStorageService(http, authService, router) {
        this.http = http;
        this.authService = authService;
        this.router = router;
        this.getTopicsSubject = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["a" /* Subject */]();
        this.getSpecificTopicSubject = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["a" /* Subject */]();
        this.topics = [];
        this.linkPut = 'https://forum-742d6.firebaseio.com/topics.json?auth=';
        this.linkGet = 'https://forum-742d6.firebaseio.com/topics.json';
    }
    TopicStorageService.prototype.getTopics = function () {
        var _this = this;
        this.http.get(this.linkGet).subscribe(function (response) {
            for (var i = 0; i < response.json().length; i++) {
                _this.topics[i] = new __WEBPACK_IMPORTED_MODULE_1__forum_model_topic_model__["a" /* Topic */](response.json()[i].name, response.json()[i].content, response.json()[i].imagePath, response.json()[i].comment);
                _this.getTopicsSubject.next(_this.topics);
            }
        });
    };
    TopicStorageService.prototype.addTopic = function (topic) {
        var _this = this;
        var topics;
        this.http.get(this.linkGet).subscribe(function (response) {
            response.json() == null ? topics = [] : topics = response.json();
            topics.push(topic);
            _this.http.put(_this.linkPut + _this.authService.getTokenId(), topics).subscribe(function () { return _this.router.navigate(['/']); });
        });
    };
    TopicStorageService.prototype.addTopics = function () {
        this.http.put(this.linkPut + this.authService.getTokenId(), this.topics).subscribe(function (resopnse) { return console.log(resopnse); });
    };
    TopicStorageService.prototype.removeTopic = function (index) {
        this.http.get(this.linkGet + this.authService.getTokenId()).subscribe(function (response) { return console.log(response.json()); });
    };
    TopicStorageService.prototype.getTopic = function (index) {
        var _this = this;
        this.http.get(this.linkGet).subscribe(function (response) {
            var topic = new __WEBPACK_IMPORTED_MODULE_1__forum_model_topic_model__["a" /* Topic */](response.json()[index].name, response.json()[index].content, response.json()[index].imagePath, response.json()[index].comment);
            _this.getSpecificTopicSubject.next(topic);
        });
    };
    TopicStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], TopicStorageService);
    return TopicStorageService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    auth: {
        clientID: 'AGDvo5HrAl9cJFVW6vSmOBcoXNG26yhX',
        domain: 'surbanik.eu.auth0.com',
        audience: 'http://localhost:3001',
        redirect: 'http://localhost:3000/callback',
        scope: 'openid profile email'
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map