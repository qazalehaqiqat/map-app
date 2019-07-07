(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["number1-number1-module"],{

/***/ "./src/app/pages/stops/tab1/number1/number1.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/stops/tab1/number1/number1.module.ts ***!
  \************************************************************/
/*! exports provided: Number1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Number1PageModule", function() { return Number1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _number1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./number1.page */ "./src/app/pages/stops/tab1/number1/number1.page.ts");







var routes = [
    {
        path: '',
        component: _number1_page__WEBPACK_IMPORTED_MODULE_6__["Number1Page"]
    }
];
var Number1PageModule = /** @class */ (function () {
    function Number1PageModule() {
    }
    Number1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_number1_page__WEBPACK_IMPORTED_MODULE_6__["Number1Page"]]
        })
    ], Number1PageModule);
    return Number1PageModule;
}());



/***/ }),

/***/ "./src/app/pages/stops/tab1/number1/number1.page.html":
/*!************************************************************!*\
  !*** ./src/app/pages/stops/tab1/number1/number1.page.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \n  <ion-header>\n    <ion-toolbar>\n      <ion-title text-center>متروو : خط شمالی - جنوبی</ion-title>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    </ion-toolbar>\n  \n  </ion-header> -->\n  <ion-header>\n \n    <ion-toolbar>\n      <ion-title text-center style=\"color: white\">  مترو : خط شمالی - جنوبی</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n   \n  <ion-list>\n <ion-item dir=\"rtl\">\n  <ion-avatar item-end>\n  <ion-icon name=\"subway\"></ion-icon>\n </ion-avatar>\n <h5>پایانه ی مترو قدس</h5>\n </ion-item>\n  <ion-item dir=\"rtl\">\n  <ion-avatar item-end>\n <ion-icon name=\"subway\"></ion-icon>\n  </ion-avatar>\n  <h5>بهشتی</h5>\n  </ion-item>\n  <ion-item dir=\"rtl\">\n   <ion-avatar item-end>\n  <ion-icon name=\"subway\"></ion-icon>\n </ion-avatar>\n <h5>خواجه نصیر</h5>\n </ion-item>\n  <ion-item dir=\"rtl\">\n  <ion-avatar item-end>\n   <ion-icon name=\"subway\"></ion-icon>\n </ion-avatar>\n  <h5>شیخ بهایی</h5>\n   </ion-item>\n  <ion-item dir=\"rtl\">\n <ion-avatar item-end>\n   <ion-icon name=\"subway\"></ion-icon>\n   </ion-avatar>\n  <h5>مطهری</h5>\n </ion-item>\n  <ion-item dir=\"rtl\">\n   <ion-avatar item-end>\n  <ion-icon name=\"subway\"></ion-icon>\n  </ion-avatar>\n <h5>جابرانصاری</h5>\n  </ion-item>\n  <ion-item dir=\"rtl\">\n    <ion-avatar item-end>\n   <ion-icon name=\"subway\"></ion-icon>\n   </ion-avatar>\n     <h5>کاوه</h5>\n     </ion-item>\n  <ion-item dir=\"rtl\">\n   <ion-avatar item-end>\n  <ion-icon name=\"subway\"></ion-icon>\n  </ion-avatar>\n  <h5>چمران </h5>\n </ion-item>\n   <ion-item dir=\"rtl\">\n  <ion-avatar item-end>\n <ion-icon name=\"subway\"></ion-icon>\n     </ion-avatar>\n    <h5>مدرس</h5>\n   </ion-item>\n  <ion-item dir=\"rtl\">\n  <ion-avatar item-end>\n  <ion-icon name=\"subway\"></ion-icon>\n  </ion-avatar>\n   <h5> شهدا</h5>\n  </ion-item>\n  <ion-item dir=\"rtl\">\n  <ion-avatar item-end>\n   <ion-icon name=\"subway\"></ion-icon>\n </ion-avatar>\n <h5>تختی</h5>\n  </ion-item>\n <ion-item dir=\"rtl\">\n  <ion-avatar item-end>\n  <ion-icon name=\"subway\"></ion-icon>\n </ion-avatar>\n  <h5>دروازه دولت</h5>\n  </ion-item>\n <ion-item dir=\"rtl\">\n   <ion-avatar item-end>\n  <ion-icon name=\"subway\"></ion-icon>\n  </ion-avatar>\n  <h5>انقلاب</h5>\n  </ion-item>\n <ion-item dir=\"rtl\">\n <ion-avatar item-end>\n <ion-icon name=\"subway\"></ion-icon>\n </ion-avatar>\n  <h5>سی و سه پل</h5>\n  </ion-item>\n  <ion-item dir=\"rtl\">\n  <ion-avatar item-end>\n <ion-icon name=\"subway\"></ion-icon>\n   </ion-avatar>\n  <h5>میرداماد</h5>\n </ion-item>\n  <ion-item dir=\"rtl\">\n <ion-avatar item-end>\n <ion-icon name=\"subway\"></ion-icon>\n </ion-avatar>\n   <h5>شریعتی</h5>\n </ion-item>\n  <ion-item dir=\"rtl\">\n  <ion-avatar item-end>\n  <ion-icon name=\"subway\"></ion-icon>\n </ion-avatar>\n  <h5>دروازه شیراز</h5>\n </ion-item>\n <ion-item dir=\"rtl\">\n    <ion-avatar item-end>\n    <ion-icon name=\"subway\"></ion-icon>\n   </ion-avatar>\n    <h5>دانشگاه</h5>\n   </ion-item>\n   <ion-item dir=\"rtl\">\n      <ion-avatar item-end>\n      <ion-icon name=\"subway\"></ion-icon>\n     </ion-avatar>\n      <h5>کارگر</h5>\n     </ion-item>\n     <ion-item dir=\"rtl\">\n        <ion-avatar item-end>\n        <ion-icon name=\"subway\"></ion-icon>\n       </ion-avatar>\n        <h5>خوابگاه</h5>\n       </ion-item>\n       <ion-item dir=\"rtl\">\n          <ion-avatar item-end>\n          <ion-icon name=\"subway\"></ion-icon>\n         </ion-avatar>\n          <h5>ترمینال صفه</h5>\n         </ion-item>\n          </ion-list>\n      \n        \n</ion-content>"

/***/ }),

/***/ "./src/app/pages/stops/tab1/number1/number1.page.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/stops/tab1/number1/number1.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0b3BzL3RhYjEvbnVtYmVyMS9udW1iZXIxLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/stops/tab1/number1/number1.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/stops/tab1/number1/number1.page.ts ***!
  \**********************************************************/
/*! exports provided: Number1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Number1Page", function() { return Number1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var Number1Page = /** @class */ (function () {
    function Number1Page() {
    }
    Number1Page.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
    ], Number1Page.prototype, "infiniteScroll", void 0);
    Number1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-number1',
            template: __webpack_require__(/*! ./number1.page.html */ "./src/app/pages/stops/tab1/number1/number1.page.html"),
            styles: [__webpack_require__(/*! ./number1.page.scss */ "./src/app/pages/stops/tab1/number1/number1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Number1Page);
    return Number1Page;
}());



/***/ })

}]);
//# sourceMappingURL=number1-number1-module.js.map