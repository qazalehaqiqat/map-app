(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["number3-number3-module"],{

/***/ "./src/app/pages/stops/tab1/number3/number3.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/stops/tab1/number3/number3.module.ts ***!
  \************************************************************/
/*! exports provided: Number3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Number3PageModule", function() { return Number3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _number3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./number3.page */ "./src/app/pages/stops/tab1/number3/number3.page.ts");







var routes = [
    {
        path: '',
        component: _number3_page__WEBPACK_IMPORTED_MODULE_6__["Number3Page"]
    }
];
var Number3PageModule = /** @class */ (function () {
    function Number3PageModule() {
    }
    Number3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_number3_page__WEBPACK_IMPORTED_MODULE_6__["Number3Page"]]
        })
    ], Number3PageModule);
    return Number3PageModule;
}());



/***/ }),

/***/ "./src/app/pages/stops/tab1/number3/number3.page.html":
/*!************************************************************!*\
  !*** ./src/app/pages/stops/tab1/number3/number3.page.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n \n  <ion-toolbar>\n    <ion-title text-center style=\"color:  white\">مترو : خط شمالی - جنوبی</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-item dir=\"rtl\">\n  <ion-avatar item-end>\n  <ion-icon name=\"md-card\"></ion-icon>\n </ion-avatar>\n <h5 color=\"danger\">هزینه با کارت </h5>\n <h5>1000 تومان</h5>\n </ion-item>\n  <ion-item dir=\"rtl\">\n  <ion-avatar item-end>\n <ion-icon name=\"md-cash\"></ion-icon>\n  </ion-avatar>\n  <h5 color=\"danger\">هزینه نقدی </h5>\n <h5>1500 تومان</h5>\n  </ion-item>\n  <ion-item dir=\"rtl\">\n   <ion-avatar item-end>\n  <ion-icon name=\"md-bus\"></ion-icon>\n </ion-avatar>\n <h5 color=\"danger\">زمان حرکت </h5>\n <h5>از 6:30 تا 21:30</h5>\n </ion-item>"

/***/ }),

/***/ "./src/app/pages/stops/tab1/number3/number3.page.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/stops/tab1/number3/number3.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --ion-color-base: #577cd5;\n  /* fallback for old browsers */\n  --ion-color-base: -webkit-linear-gradient(to right, #577cd5, #66236e);\n  /* Chrome 10-25, Safari 5.1-6 */\n  --ion-color-base: linear-gradient(to right, #577cd5, #66236e); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3RvcHMvdGFiMS9udW1iZXIzL0Q6XFxoeWJyaWRfbW9iaWxlX2FwcFxcTWFwYXBwL3NyY1xcYXBwXFxwYWdlc1xcc3RvcHNcXHRhYjFcXG51bWJlcjNcXG51bWJlcjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQWlCO0VBQ2pCLDhCQUFBO0VBQ0EscUVBQWlCO0VBQ2pCLCtCQUFBO0VBQ0EsNkRBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdG9wcy90YWIxL251bWJlcjMvbnVtYmVyMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi10b29sYmFyIHtcclxuICAgIC0taW9uLWNvbG9yLWJhc2U6ICM1NzdjZDU7XHJcbiAgICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzU3N2NkNSwgIzY2MjM2ZSk7XHJcbiAgICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xyXG4gICAgLS1pb24tY29sb3ItYmFzZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNTc3Y2Q1LCAjNjYyMzZlKTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/stops/tab1/number3/number3.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/stops/tab1/number3/number3.page.ts ***!
  \**********************************************************/
/*! exports provided: Number3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Number3Page", function() { return Number3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Number3Page = /** @class */ (function () {
    function Number3Page() {
    }
    Number3Page.prototype.ngOnInit = function () {
    };
    Number3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-number3',
            template: __webpack_require__(/*! ./number3.page.html */ "./src/app/pages/stops/tab1/number3/number3.page.html"),
            styles: [__webpack_require__(/*! ./number3.page.scss */ "./src/app/pages/stops/tab1/number3/number3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Number3Page);
    return Number3Page;
}());



/***/ })

}]);
//# sourceMappingURL=number3-number3-module.js.map