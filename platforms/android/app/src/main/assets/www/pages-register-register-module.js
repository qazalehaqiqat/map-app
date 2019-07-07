(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"],{

/***/ "./src/app/pages/register/register.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/pages/register/register.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<ion-content>\n  <div class=\"gradiant\">\n      <div class=\"dot\">\n          <!-- <form #form=\"ngForm\" (ngSubmit)=\"register(form)\" method=\"post\"> -->\n              <ion-item class=\"input-phone\">\n                  <!-- <ion-label position=\"floating\">شماره تلفن</ion-label> -->\n                  <ion-input [(ngModel)]=\"name\" id=\"name\" placeholder=\"نام\"> <ion-icon name=\"contact\"></ion-icon></ion-input>\n                </ion-item>\n                <ion-item class=\"input-lastphone\">\n                    <!-- <ion-label position=\"floating\">شماره تلفن</ion-label> -->\n                    <ion-input [(ngModel)]=\"lastName\" id=\"lastName\" placeholder=\"نام خانوادگی\" > <ion-icon name=\"contact\"></ion-icon></ion-input>\n                  </ion-item>\n              <ion-item class=\"input-numphone\">\n                <!-- <ion-label position=\"floating\">شماره تلفن</ion-label> -->\n                <ion-input [(ngModel)]=\"phoneNumber\" id=\"phoneNumber\" placeholder=\"شماره تلفن\"  padding> <ion-icon name=\"phone-portrait\"></ion-icon></ion-input>\n              </ion-item>\n              <ion-item class=\"input-pass\">\n                <!-- <ion-label position=\"floating\">رمز عبور</ion-label> -->\n                <ion-input  [(ngModel)]=\"password\" id=\"password\" placeholder=\"رمز عبور\" type=\"password\"  padding><ion-icon name=\"key\"></ion-icon></ion-input>\n              </ion-item>\n            <!-- </form> -->\n      </div>\n      <div class=\"radius\">\n      </div>\n  </div>\n  <div >\n    <button class=\"loginPage-Buttons\" (click)=\"register()\">ثبت نام</button>\n  </div>\n  \n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/register/register.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gradiant {\n  margin-top: -39px;\n  background-image: linear-gradient(19deg, #577cd5, #66236e);\n  border-radius: 2000px/450px; }\n\n.dot {\n  height: 470px;\n  width: 100%;\n  display: inline-block; }\n\n.input-phone {\n  direction: rtl;\n  width: 318px;\n  height: 45px;\n  border-radius: 23px;\n  box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.08);\n  margin-top: 118px;\n  margin-left: calc(50% - 159px);\n  font-size: 17px;\n  color: #b5b5b5;\n  -webkit-appearance: none; }\n\n.input-lastphone {\n  direction: rtl;\n  width: 318px;\n  height: 45px;\n  border-radius: 23px;\n  box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.08);\n  margin-top: 20px;\n  margin-left: calc(50% - 159px);\n  font-size: 17px;\n  color: #b5b5b5;\n  -webkit-appearance: none; }\n\n.input-numphone {\n  direction: rtl;\n  width: 318px;\n  height: 45px;\n  border-radius: 23px;\n  box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.08);\n  margin-top: 20px;\n  margin-left: calc(50% - 159px);\n  font-size: 17px;\n  color: #b5b5b5;\n  -webkit-appearance: none; }\n\n.input-pass {\n  direction: rtl;\n  width: 318px;\n  height: 45px;\n  border-radius: 23px;\n  box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.08);\n  margin-top: 20px;\n  margin-left: calc(50% - 159px);\n  font-size: 17px;\n  color: #b5b5b5;\n  -webkit-appearance: none; }\n\n#input {\n  border: none; }\n\n#login-button {\n  width: 318px !important;\n  height: 53px !important;\n  border-radius: 27px !important;\n  box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.08) !important;\n  background-color: #ffffff !important;\n  border: solid 1px #5c5fb4 !important;\n  margin-top: 30px !important;\n  margin-left: calc(50% - 159px) !important;\n  font-size: 25px !important;\n  letter-spacing: normal !important;\n  color: #5c5fb4 !important;\n  -webkit-appearance: none !important; }\n\n.radius {\n  width: 100%;\n  height: 20px; }\n\n.loginPage-Buttons {\n  width: 315px;\n  height: 50px;\n  border-radius: 27px;\n  box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.08);\n  background-color: #ffffff;\n  border: solid 1px #5c5fb4;\n  margin-top: 27px;\n  margin-left: calc(50% - 159px);\n  font-size: 21px;\n  letter-spacing: normal;\n  color: #5c5fb4;\n  -webkit-appearance: none; }\n\n.forgot-password {\n  margin-top: 10px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvRDpcXGh5YnJpZF9tb2JpbGVfYXBwXFxNYXBhcHAvc3JjXFxhcHBcXHBhZ2VzXFxyZWdpc3RlclxccmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0VBQ2pCLDBEQUEwRDtFQUMxRCwyQkFBMkIsRUFBQTs7QUFHN0I7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUVuQiw0Q0FBNEM7RUFDNUMsaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsY0FBYztFQUNkLHdCQUF3QixFQUFBOztBQUUxQjtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUVuQiw0Q0FBNEM7RUFDNUMsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsY0FBYztFQUNkLHdCQUF3QixFQUFBOztBQUUxQjtFQUVGLGNBQWM7RUFDVixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUVuQiw0Q0FBNEM7RUFDNUMsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsY0FBYztFQUNkLHdCQUF3QixFQUFBOztBQUcxQjtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUVuQiw0Q0FBNEM7RUFDNUMsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsY0FBYztFQUNkLHdCQUF3QixFQUFBOztBQUcxQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDRSx1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUU5Qix1REFBdUQ7RUFDdkQsb0NBQW9DO0VBQ3BDLG9DQUFvQztFQUNwQywyQkFBMkI7RUFDM0IseUNBQXlDO0VBQ3pDLDBCQUEwQjtFQUMxQixpQ0FBaUM7RUFDakMseUJBQXlCO0VBQ3pCLG1DQUFtQyxFQUFBOztBQUVyQztFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDSSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUVuQiw0Q0FBNEM7RUFDNUMseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLHdCQUF3QixFQUFBOztBQUc1QjtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmFkaWFudCB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMzlweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxOWRlZywgIzU3N2NkNSwgIzY2MjM2ZSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMDAwcHgvNDUwcHg7XHJcbiAgfVxyXG5cclxuICAuZG90IHtcclxuICAgIGhlaWdodDogNDcwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcblxyXG4gIC5pbnB1dC1waG9uZSB7XHJcbiAgICBkaXJlY3Rpb246IHJ0bDtcclxuICAgIHdpZHRoOiAzMThweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIzcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgICBtYXJnaW4tdG9wOiAxMThweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAtIDE1OXB4KTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiAjYjViNWI1O1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIH1cclxuICAuaW5wdXQtbGFzdHBob25le1xyXG4gICAgZGlyZWN0aW9uOiBydGw7XHJcbiAgICB3aWR0aDogMzE4cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyM3B4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAtIDE1OXB4KTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiAjYjViNWI1O1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIH1cclxuICAuaW5wdXQtbnVtcGhvbmV7XHJcblxyXG5kaXJlY3Rpb246IHJ0bDtcclxuICAgIHdpZHRoOiAzMThweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIzcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoNTAlIC0gMTU5cHgpO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgY29sb3I6ICNiNWI1YjU7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgfVxyXG4gXHJcbiAgLmlucHV0LXBhc3Mge1xyXG4gICAgZGlyZWN0aW9uOiBydGw7XHJcbiAgICB3aWR0aDogMzE4cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyM3B4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAtIDE1OXB4KTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiAjYjViNWI1O1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgXHJcbiAgfVxyXG4gICNpbnB1dHtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuXHJcbiAgI2xvZ2luLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMzE4cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNTNweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjdweCAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KSAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCkgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICM1YzVmYjQgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAtIDE1OXB4KSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzVjNWZiNCAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5yYWRpdXMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAubG9naW5QYWdlLUJ1dHRvbnN7XHJcbiAgICAgIHdpZHRoOiAzMTVweDtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyN3B4O1xyXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDNweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzVjNWZiNDtcclxuICAgICAgbWFyZ2luLXRvcDogMjdweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoNTAlIC0gMTU5cHgpO1xyXG4gICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAgIGNvbG9yOiAjNWM1ZmI0O1xyXG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuZm9yZ290LXBhc3N3b3Jke1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/register/register.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/login-service.service */ "./src/app/services/login-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _providers_userProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/userProvider */ "./src/providers/userProvider.ts");






var RegisterPage = /** @class */ (function () {
    function RegisterPage(http, loginService, router, UserProvider) {
        this.http = http;
        this.loginService = loginService;
        this.router = router;
        this.UserProvider = UserProvider;
        this.phoneNumber = '';
        this.password = '';
        this.name = '';
        this.lastName = '';
    }
    RegisterPage.prototype.ngOnInit = function () { };
    RegisterPage.prototype.register = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.loginService.register(this.phoneNumber, this.password, this.lastName, this.name).subscribe(function (data) {
                    _this.loginService.user = data.Data;
                    if (data.Validate) {
                        // this.router.navigateByUrl('tabs');
                        console.log(data);
                        // this.router.navigateByUrl('tabs');
                        // this.router.navigate(['/tabs']);
                        _this.router.navigateByUrl('login');
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/pages/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _services_login_service_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _providers_userProvider__WEBPACK_IMPORTED_MODULE_5__["UserProvider"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-register-register-module.js.map