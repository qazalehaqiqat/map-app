(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n    <ion-toolbar>\n      <ion-title>\n        ورود با شماره موبایل\n      </ion-title>\n    </ion-toolbar>\n  </ion-header> -->\n<!-- <ion-content padding>\n  <form #form=\"ngForm\" (ngSubmit)=\"login(form)\" method=\"post\" autocomplete=\"off\">\n    <ion-row>\n      <ion-col>\n        <ion-list inset>\n            <ion-item>\n                <ion-label position=\"floating\" autofocus=\"true\">PhoneNumber</ion-label>\n                <ion-input type=\"text\" name=\"PhoneNumber\" [(ngModel)]=\"PhoneNumber\"></ion-input>\n              </ion-item>\n              <ion-item>\n                  <ion-label position=\"floating\">Password</ion-label>\n                  <ion-input type=\"password\" name=\"password\" [(ngModel)]=\"password\"></ion-input>\n                </ion-item>\n      \n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n      \n        <br>\n        <ion-button expand=\"block\" (click)=\"login()\">Login</ion-button>\n    \n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content> -->\n\n\n<ion-content>\n  <div class=\"gradiant\">\n      <div class=\"dot\">\n          <!-- <img class=\"bego-img\" src=\"../../../assets/bego.png\"> -->\n          <!-- <form #form=\"ngForm\" (ngSubmit)=\"login(form)\" method=\"post\"> -->\n              <ion-item class=\"input-phone\">\n                <!-- <ion-label position=\"floating\">شماره تلفن</ion-label> -->\n                <ion-input [(ngModel)]=\"phoneNumber\" id=\"input\" placeholder=\"شماره تلفن\"  padding> <ion-icon name=\"phone-portrait\"></ion-icon></ion-input>\n              </ion-item>\n              <ion-item class=\"input-pass\">\n                <!-- <ion-label position=\"floating\">رمز عبور</ion-label> -->\n                <ion-input  [(ngModel)]=\"password\" id=\"input\" placeholder=\"رمز عبور\" type=\"password\"  padding><ion-icon name=\"key\"></ion-icon></ion-input>\n              </ion-item>\n            <!-- </form> -->\n      </div>\n      <div class=\"radius\">\n      </div>\n  </div>\n  <div >\n    <button class=\"loginPage-Buttons\" (click)=\"login()\">ورود</button>\n    <button class=\"loginPage-Buttons\"(click)=\"register()\">ثبت نام</button>\n  </div>\n  <div class=\"forgot-password\">\n    <a style=\"text-align:center\">آیا رمز عبور خود را فراموش کرده اید؟</a>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gradiant {\n  margin-top: -39px;\n  background-image: linear-gradient(19deg, #577cd5, #66236e);\n  border-radius: 2000px/450px; }\n\n.dot {\n  height: 414px;\n  width: 100%;\n  display: inline-block; }\n\n.input-phone {\n  direction: rtl;\n  width: 318px;\n  height: 45px;\n  border-radius: 23px;\n  box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.08);\n  margin-top: 218px;\n  margin-left: calc(50% - 159px);\n  font-size: 17px;\n  color: #b5b5b5;\n  -webkit-appearance: none; }\n\n.input-pass {\n  direction: rtl;\n  width: 318px;\n  height: 45px;\n  border-radius: 23px;\n  box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.08);\n  margin-top: 20px;\n  margin-left: calc(50% - 159px);\n  font-size: 17px;\n  color: #b5b5b5;\n  -webkit-appearance: none; }\n\n#input {\n  border: none; }\n\n#login-button {\n  width: 318px !important;\n  height: 53px !important;\n  border-radius: 27px !important;\n  box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.08) !important;\n  background-color: #ffffff !important;\n  border: solid 1px #5c5fb4 !important;\n  margin-top: 30px !important;\n  margin-left: calc(50% - 159px) !important;\n  font-size: 25px !important;\n  letter-spacing: normal !important;\n  color: #5c5fb4 !important;\n  -webkit-appearance: none !important; }\n\n.radius {\n  width: 100%;\n  height: 20px; }\n\n.loginPage-Buttons {\n  width: 315px;\n  height: 50px;\n  border-radius: 27px;\n  box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.08);\n  background-color: #ffffff;\n  border: solid 1px #5c5fb4;\n  margin-top: 27px;\n  margin-left: calc(50% - 159px);\n  font-size: 21px;\n  letter-spacing: normal;\n  color: #5c5fb4;\n  -webkit-appearance: none; }\n\n.forgot-password {\n  margin-top: 10px;\n  text-align: center; }\n\n.bego-img {\n  width: 200px;\n  margin-top: 160px;\n  margin-left: calc(50% - 100px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vRDpcXGh5YnJpZF9tb2JpbGVfYXBwXFxNYXBhcHAvc3JjXFxhcHBcXHBhZ2VzXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0VBQ2pCLDBEQUEwRDtFQUMxRCwyQkFBMkIsRUFBQTs7QUFHN0I7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUVuQiw0Q0FBNEM7RUFDNUMsaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsY0FBYztFQUNkLHdCQUF3QixFQUFBOztBQUUxQjtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUVuQiw0Q0FBNEM7RUFDNUMsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsY0FBYztFQUNkLHdCQUF3QixFQUFBOztBQUcxQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDRSx1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUU5Qix1REFBdUQ7RUFDdkQsb0NBQW9DO0VBQ3BDLG9DQUFvQztFQUNwQywyQkFBMkI7RUFDM0IseUNBQXlDO0VBQ3pDLDBCQUEwQjtFQUMxQixpQ0FBaUM7RUFDakMseUJBQXlCO0VBQ3pCLG1DQUFtQyxFQUFBOztBQUVyQztFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDSSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUVuQiw0Q0FBNEM7RUFDNUMseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLHdCQUF3QixFQUFBOztBQUc1QjtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDSSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLDhCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyYWRpYW50IHtcclxuICAgIG1hcmdpbi10b3A6IC0zOXB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE5ZGVnLCAjNTc3Y2Q1LCAjNjYyMzZlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwMDBweC80NTBweDtcclxuICB9XHJcblxyXG4gIC5kb3Qge1xyXG4gICAgaGVpZ2h0OiA0MTRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLmlucHV0LXBob25lIHtcclxuICAgIGRpcmVjdGlvbjogcnRsO1xyXG4gICAgd2lkdGg6IDMxOHB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjNweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICAgIG1hcmdpbi10b3A6IDIxOHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoNTAlIC0gMTU5cHgpO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgY29sb3I6ICNiNWI1YjU7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgfVxyXG4gIC5pbnB1dC1wYXNzIHtcclxuICAgIGRpcmVjdGlvbjogcnRsO1xyXG4gICAgd2lkdGg6IDMxOHB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjNweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogY2FsYyg1MCUgLSAxNTlweCk7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjb2xvcjogI2I1YjViNTtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIFxyXG4gIH1cclxuICAjaW5wdXR7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcblxyXG4gICNsb2dpbi1idXR0b24ge1xyXG4gICAgd2lkdGg6IDMxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDUzcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI3cHggIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCkgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjNWM1ZmI0ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogY2FsYyg1MCUgLSAxNTlweCkgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM1YzVmYjQgIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAucmFkaXVzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luUGFnZS1CdXR0b25ze1xyXG4gICAgICB3aWR0aDogMzE1cHg7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjdweDtcclxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICAgICAgYm94LXNoYWRvdzogMCAzcHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIGJvcmRlcjogc29saWQgMXB4ICM1YzVmYjQ7XHJcbiAgICAgIG1hcmdpbi10b3A6IDI3cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAtIDE1OXB4KTtcclxuICAgICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgICBjb2xvcjogIzVjNWZiNDtcclxuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmZvcmdvdC1wYXNzd29yZHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYmVnby1pbWd7XHJcbiAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgbWFyZ2luLXRvcDogMTYwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAtIDEwMHB4KTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/login-service.service */ "./src/app/services/login-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_userProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/userProvider */ "./src/providers/userProvider.ts");







var LoginPage = /** @class */ (function () {
    function LoginPage(http, loginService, router, 
    // tslint:disable-next-line:no-shadowed-variable
    UserProvider, loadingCtrl) {
        this.http = http;
        this.loginService = loginService;
        this.router = router;
        this.UserProvider = UserProvider;
        this.loadingCtrl = loadingCtrl;
        this.phoneNumber = '';
        this.password = '';
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'dots'
        }).then(function (res) {
            res.present();
            res.onDidDismiss().then(function (dis) {
                console.log('Loading dismissed!');
            });
        });
    };
    LoginPage.prototype.hideLoader = function () {
        this.loadingCtrl.dismiss();
    };
    LoginPage.prototype.login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.UserProvider.user = {};
                this.showLoader();
                console.log('ph: ' + this.phoneNumber + 'pass: ' + this.password);
                this.loginService.login(this.phoneNumber, this.password).subscribe(function (data) {
                    _this.UserProvider.user = data.Data;
                    console.log('this.loginService', _this.UserProvider);
                    if (data.Validate) {
                        console.log(data);
                        _this.router.navigateByUrl('menu');
                        _this.hideLoader();
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.register = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.router.navigateByUrl('/register');
                return [2 /*return*/];
            });
        });
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _services_login_service_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _providers_userProvider__WEBPACK_IMPORTED_MODULE_6__["UserProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map