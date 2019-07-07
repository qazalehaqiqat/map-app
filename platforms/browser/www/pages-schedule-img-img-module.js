(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-schedule-img-img-module"],{

/***/ "./src/app/pages/schedule/img/img.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/schedule/img/img.module.ts ***!
  \**************************************************/
/*! exports provided: ImgPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgPageModule", function() { return ImgPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _img_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img.page */ "./src/app/pages/schedule/img/img.page.ts");







var routes = [
    {
        path: '',
        component: _img_page__WEBPACK_IMPORTED_MODULE_6__["ImgPage"]
    }
];
var ImgPageModule = /** @class */ (function () {
    function ImgPageModule() {
    }
    ImgPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_img_page__WEBPACK_IMPORTED_MODULE_6__["ImgPage"]]
        })
    ], ImgPageModule);
    return ImgPageModule;
}());



/***/ }),

/***/ "./src/app/pages/schedule/img/img.page.html":
/*!**************************************************!*\
  !*** ./src/app/pages/schedule/img/img.page.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-title text-right style=\"color: white\">زمانبندی حرکت مترو</ion-title>\n      <ion-buttons slot=\"start\">\n        <ion-back-button style=\"color: white\"></ion-back-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n<ion-card>\n <ion-card-header>\n <ion-card-title text-right> ایستگاه آزادی به سمت ایستگاه قدس</ion-card-title>\n </ion-card-header>\n        \n<ion-card-content>\n <img src='../../../../assets/metro1.png'>\n </ion-card-content>\n </ion-card>\n<ion-card>\n              <ion-card-header>\n                <ion-card-title text-right> ایستگاه آزادی به سمت ایستگاه دفاع مقدس</ion-card-title>\n              </ion-card-header>\n            \n              <ion-card-content>\n                 <img src='../../../../assets/metro2.png'>\n                </ion-card-content>\n              </ion-card>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/pages/schedule/img/img.page.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/schedule/img/img.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NjaGVkdWxlL2ltZy9pbWcucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/schedule/img/img.page.ts":
/*!************************************************!*\
  !*** ./src/app/pages/schedule/img/img.page.ts ***!
  \************************************************/
/*! exports provided: ImgPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgPage", function() { return ImgPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImgPage = /** @class */ (function () {
    function ImgPage() {
    }
    ImgPage.prototype.ngOnInit = function () {
    };
    ImgPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-img',
            template: __webpack_require__(/*! ./img.page.html */ "./src/app/pages/schedule/img/img.page.html"),
            styles: [__webpack_require__(/*! ./img.page.scss */ "./src/app/pages/schedule/img/img.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ImgPage);
    return ImgPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-schedule-img-img-module.js.map