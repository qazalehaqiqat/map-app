(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["number2-number2-module"],{

/***/ "./src/app/pages/stops/tab1/number2/number2.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/stops/tab1/number2/number2.module.ts ***!
  \************************************************************/
/*! exports provided: Number2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Number2PageModule", function() { return Number2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _number2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./number2.page */ "./src/app/pages/stops/tab1/number2/number2.page.ts");







var routes = [
    {
        path: '',
        component: _number2_page__WEBPACK_IMPORTED_MODULE_6__["Number2Page"]
    }
];
var Number2PageModule = /** @class */ (function () {
    function Number2PageModule() {
    }
    Number2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_number2_page__WEBPACK_IMPORTED_MODULE_6__["Number2Page"]]
        })
    ], Number2PageModule);
    return Number2PageModule;
}());



/***/ }),

/***/ "./src/app/pages/stops/tab1/number2/number2.page.html":
/*!************************************************************!*\
  !*** ./src/app/pages/stops/tab1/number2/number2.page.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n \n  <ion-toolbar>\n    <ion-title text-center style=\"color: white\">مترو : خط شمالی - جنوبی</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n  <ion-content>\n   \n  <ion-list>\n <ion-item dir=\"rtl\">\n  <ion-avatar item-end>\n  <ion-icon name=\"subway\"></ion-icon>\n </ion-avatar>\n <h5>ترمینال صفه</h5>\n </ion-item>\n  <ion-item dir=\"rtl\">\n  <ion-avatar item-end>\n <ion-icon name=\"subway\"></ion-icon>\n  </ion-avatar>\n  <h5>خوابگاه</h5>\n  </ion-item>\n  <ion-item dir=\"rtl\">\n   <ion-avatar item-end>\n  <ion-icon name=\"subway\"></ion-icon>\n </ion-avatar>\n <h5>کارگر</h5>\n </ion-item>\n  <ion-item dir=\"rtl\">\n  <ion-avatar item-end>\n   <ion-icon name=\"subway\"></ion-icon>\n </ion-avatar>\n  <h5>دانشگاه</h5>\n   </ion-item>\n  <ion-item dir=\"rtl\">\n <ion-avatar item-end>\n   <ion-icon name=\"subway\"></ion-icon>\n   </ion-avatar>\n  <h5>دروازه شیراز</h5>\n </ion-item>\n  <ion-item dir=\"rtl\">\n   <ion-avatar item-end>\n  <ion-icon name=\"subway\"></ion-icon>\n  </ion-avatar>\n <h5>شریعتی</h5>\n  </ion-item>\n  <ion-item dir=\"rtl\">\n    <ion-avatar item-end>\n   <ion-icon name=\"subway\"></ion-icon>\n   </ion-avatar>\n     <h5>میرداماد</h5>\n     </ion-item>\n  <ion-item dir=\"rtl\">\n   <ion-avatar item-end>\n  <ion-icon name=\"subway\"></ion-icon>\n  </ion-avatar>\n  <h5>سی و سه پل </h5>\n </ion-item>\n   <ion-item dir=\"rtl\">\n  <ion-avatar item-end>\n <ion-icon name=\"subway\"></ion-icon>\n     </ion-avatar>\n    <h5>انقلاب</h5>\n   </ion-item>\n  <ion-item dir=\"rtl\">\n  <ion-avatar item-end>\n  <ion-icon name=\"subway\"></ion-icon>\n  </ion-avatar>\n   <h5> دروازه دروازه</h5>\n  </ion-item>\n  <ion-item dir=\"rtl\">\n  <ion-avatar item-end>\n   <ion-icon name=\"subway\"></ion-icon>\n </ion-avatar>\n <h5>تختی</h5>\n  </ion-item>\n <ion-item dir=\"rtl\">\n  <ion-avatar item-end>\n  <ion-icon name=\"subway\"></ion-icon>\n </ion-avatar>\n  <h5>شهدا</h5>\n  </ion-item>\n <ion-item dir=\"rtl\">\n   <ion-avatar item-end>\n  <ion-icon name=\"subway\"></ion-icon>\n  </ion-avatar>\n  <h5>مدرس</h5>\n  </ion-item>\n <ion-item dir=\"rtl\">\n <ion-avatar item-end>\n <ion-icon name=\"subway\"></ion-icon>\n </ion-avatar>\n  <h5>چمران</h5>\n  </ion-item>\n  <ion-item dir=\"rtl\">\n  <ion-avatar item-end>\n <ion-icon name=\"subway\"></ion-icon>\n   </ion-avatar>\n  <h5>کاوه</h5>\n </ion-item>\n  <ion-item dir=\"rtl\">\n <ion-avatar item-end>\n <ion-icon name=\"subway\"></ion-icon>\n </ion-avatar>\n   <h5>جابر انصاری</h5>\n </ion-item>\n  <ion-item dir=\"rtl\">\n  <ion-avatar item-end>\n  <ion-icon name=\"subway\"></ion-icon>\n </ion-avatar>\n  <h5>مطهری</h5>\n </ion-item>\n <ion-item dir=\"rtl\">\n    <ion-avatar item-end>\n    <ion-icon name=\"subway\"></ion-icon>\n   </ion-avatar>\n    <h5>شیخ بهایی</h5>\n   </ion-item>\n   <ion-item dir=\"rtl\">\n      <ion-avatar item-end>\n      <ion-icon name=\"subway\"></ion-icon>\n     </ion-avatar>\n      <h5>خواجه نصیر</h5>\n     </ion-item>\n     <ion-item dir=\"rtl\">\n        <ion-avatar item-end>\n        <ion-icon name=\"subway\"></ion-icon>\n       </ion-avatar>\n        <h5>بهشتی</h5>\n       </ion-item>\n       <ion-item dir=\"rtl\">\n          <ion-avatar item-end>\n          <ion-icon name=\"subway\"></ion-icon>\n         </ion-avatar>\n          <h5>پایانه مترو قدس</h5>\n         </ion-item>\n          </ion-list>\n      \n        \n</ion-content>"

/***/ }),

/***/ "./src/app/pages/stops/tab1/number2/number2.page.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/stops/tab1/number2/number2.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --ion-color-base: #577cd5;\n  /* fallback for old browsers */\n  --ion-color-base: -webkit-linear-gradient(to right, #577cd5, #66236e);\n  /* Chrome 10-25, Safari 5.1-6 */\n  --ion-color-base: linear-gradient(to right, #577cd5, #66236e); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3RvcHMvdGFiMS9udW1iZXIyL0Q6XFxoeWJyaWRfbW9iaWxlX2FwcFxcTWFwYXBwL3NyY1xcYXBwXFxwYWdlc1xcc3RvcHNcXHRhYjFcXG51bWJlcjJcXG51bWJlcjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQWlCO0VBQ2pCLDhCQUFBO0VBQ0EscUVBQWlCO0VBQ2pCLCtCQUFBO0VBQ0EsNkRBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdG9wcy90YWIxL251bWJlcjIvbnVtYmVyMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi10b29sYmFyIHtcclxuICAgIC0taW9uLWNvbG9yLWJhc2U6ICM1NzdjZDU7XHJcbiAgICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzU3N2NkNSwgIzY2MjM2ZSk7XHJcbiAgICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xyXG4gICAgLS1pb24tY29sb3ItYmFzZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNTc3Y2Q1LCAjNjYyMzZlKTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/stops/tab1/number2/number2.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/stops/tab1/number2/number2.page.ts ***!
  \**********************************************************/
/*! exports provided: Number2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Number2Page", function() { return Number2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Number2Page = /** @class */ (function () {
    function Number2Page() {
    }
    Number2Page.prototype.ngOnInit = function () {
    };
    Number2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-number2',
            template: __webpack_require__(/*! ./number2.page.html */ "./src/app/pages/stops/tab1/number2/number2.page.html"),
            styles: [__webpack_require__(/*! ./number2.page.scss */ "./src/app/pages/stops/tab1/number2/number2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Number2Page);
    return Number2Page;
}());



/***/ })

}]);
//# sourceMappingURL=number2-number2-module.js.map