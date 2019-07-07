(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["num1-num1-module"],{

/***/ "./src/app/pages/stops/tab2/num1/num1.module.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/stops/tab2/num1/num1.module.ts ***!
  \******************************************************/
/*! exports provided: Num1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Num1PageModule", function() { return Num1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _num1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./num1.page */ "./src/app/pages/stops/tab2/num1/num1.page.ts");







var routes = [
    {
        path: '',
        component: _num1_page__WEBPACK_IMPORTED_MODULE_6__["Num1Page"]
    }
];
var Num1PageModule = /** @class */ (function () {
    function Num1PageModule() {
    }
    Num1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_num1_page__WEBPACK_IMPORTED_MODULE_6__["Num1Page"]]
        })
    ], Num1PageModule);
    return Num1PageModule;
}());



/***/ }),

/***/ "./src/app/pages/stops/tab2/num1/num1.page.html":
/*!******************************************************!*\
  !*** ./src/app/pages/stops/tab2/num1/num1.page.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n \n  <ion-toolbar>\n    <ion-title text-center style=\"color: white\">  پایانه باقوشخانه - پل یزدآباد</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n  <ion-content>\n   \n  <ion-list>\n <ion-item dir=\"rtl\">\n  <ion-avatar item-end>\n  <ion-icon name=\"subway\"></ion-icon>\n </ion-avatar>\n <h5>پایانه ی باقوشخانه</h5>\n </ion-item>\n  <ion-item dir=\"rtl\">\n  <ion-avatar item-end>\n <ion-icon name=\"subway\"></ion-icon>\n  </ion-avatar>\n  <h5>میدان قدس</h5>\n  </ion-item>\n  <ion-item dir=\"rtl\">\n   <ion-avatar item-end>\n  <ion-icon name=\"subway\"></ion-icon>\n </ion-avatar>\n <h5>مسجد الغفور</h5>\n </ion-item>\n  <ion-item dir=\"rtl\">\n  <ion-avatar item-end>\n   <ion-icon name=\"subway\"></ion-icon>\n </ion-avatar>\n  <h5>آل خجند</h5>\n   </ion-item>\n  <ion-item dir=\"rtl\">\n <ion-avatar item-end>\n   <ion-icon name=\"subway\"></ion-icon>\n   </ion-avatar>\n  <h5>مبارزان</h5>\n </ion-item>\n  <ion-item dir=\"rtl\">\n   <ion-avatar item-end>\n  <ion-icon name=\"subway\"></ion-icon>\n  </ion-avatar>\n <h5>چهارراه هشت بهشت</h5>\n  </ion-item>\n  <ion-item dir=\"rtl\">\n    <ion-avatar item-end>\n   <ion-icon name=\"subway\"></ion-icon>\n   </ion-avatar>\n     <h5>چهارراه نورباران</h5>\n     </ion-item>\n  <ion-item dir=\"rtl\">\n   <ion-avatar item-end>\n  <ion-icon name=\"subway\"></ion-icon>\n  </ion-avatar>\n  <h5>میدان بزرگمهر </h5>\n </ion-item>\n   <ion-item dir=\"rtl\">\n  <ion-avatar item-end>\n <ion-icon name=\"subway\"></ion-icon>\n     </ion-avatar>\n    <h5>چهارراه آبشار</h5>\n   </ion-item>\n  <ion-item dir=\"rtl\">\n  <ion-avatar item-end>\n  <ion-icon name=\"subway\"></ion-icon>\n  </ion-avatar>\n   <h5> چهارراه آپادانا</h5>\n  </ion-item>\n  <ion-item dir=\"rtl\">\n  <ion-avatar item-end>\n   <ion-icon name=\"subway\"></ion-icon>\n </ion-avatar>\n <h5>سپهسالار</h5>\n  </ion-item>\n <ion-item dir=\"rtl\">\n  <ion-avatar item-end>\n  <ion-icon name=\"subway\"></ion-icon>\n </ion-avatar>\n  <h5>گلزار شهدا</h5>\n  </ion-item>\n <ion-item dir=\"rtl\">\n   <ion-avatar item-end>\n  <ion-icon name=\"subway\"></ion-icon>\n  </ion-avatar>\n  <h5>هوانیروز</h5>\n  </ion-item>\n <ion-item dir=\"rtl\">\n <ion-avatar item-end>\n <ion-icon name=\"subway\"></ion-icon>\n </ion-avatar>\n  <h5>فرایبورگ</h5>\n  </ion-item>\n  <ion-item dir=\"rtl\">\n  <ion-avatar item-end>\n <ion-icon name=\"subway\"></ion-icon>\n   </ion-avatar>\n  <h5>ملاصدرا</h5>\n </ion-item>\n  <ion-item dir=\"rtl\">\n <ion-avatar item-end>\n <ion-icon name=\"subway\"></ion-icon>\n </ion-avatar>\n   <h5>دروازه شیراز</h5>\n </ion-item>\n  <ion-item dir=\"rtl\">\n  <ion-avatar item-end>\n  <ion-icon name=\"subway\"></ion-icon>\n </ion-avatar>\n  <h5>توحید</h5>\n </ion-item>\n <ion-item dir=\"rtl\">\n    <ion-avatar item-end>\n    <ion-icon name=\"subway\"></ion-icon>\n   </ion-avatar>\n    <h5>حکیم نظامی</h5>\n   </ion-item>\n   <ion-item dir=\"rtl\">\n      <ion-avatar item-end>\n      <ion-icon name=\"subway\"></ion-icon>\n     </ion-avatar>\n      <h5>حسین آباد</h5>\n     </ion-item>\n     <ion-item dir=\"rtl\">\n        <ion-avatar item-end>\n        <ion-icon name=\"subway\"></ion-icon>\n       </ion-avatar>\n        <h5>میدان ارتش</h5>\n       </ion-item>\n       <ion-item dir=\"rtl\">\n          <ion-avatar item-end>\n          <ion-icon name=\"subway\"></ion-icon>\n         </ion-avatar>\n          <h5>فرح آباد</h5>\n         </ion-item>\n          \n          <ion-item dir=\"rtl\">\n            <ion-avatar item-end>\n            <ion-icon name=\"subway\"></ion-icon>\n           </ion-avatar>\n            <h5>سه راه سیمین</h5>\n           </ion-item>\n          \n            <ion-item dir=\"rtl\">\n              <ion-avatar item-end>\n              <ion-icon name=\"subway\"></ion-icon>\n             </ion-avatar>\n              <h5>مسجدالمعصوم</h5>\n             </ion-item>\n             \n              <ion-item dir=\"rtl\">\n                <ion-avatar item-end>\n                <ion-icon name=\"subway\"></ion-icon>\n               </ion-avatar>\n                <h5>مفتح</h5>\n               </ion-item>\n              \n                <ion-item dir=\"rtl\">\n                  <ion-avatar item-end>\n                  <ion-icon name=\"subway\"></ion-icon>\n                 </ion-avatar>\n                  <h5>باغ فردوس</h5>\n                 </ion-item>\n                  \n                  <ion-item dir=\"rtl\">\n                    <ion-avatar item-end>\n                    <ion-icon name=\"subway\"></ion-icon>\n                   </ion-avatar>\n                    <h5>کشاورز</h5>\n                   </ion-item>\n                  \n                    <ion-item dir=\"rtl\">\n                      <ion-avatar item-end>\n                      <ion-icon name=\"subway\"></ion-icon>\n                     </ion-avatar>\n                      <h5>بیمارستان زینب</h5>\n                     </ion-item>\n                    \n                      <ion-item dir=\"rtl\">\n                        <ion-avatar item-end>\n                        <ion-icon name=\"subway\"></ion-icon>\n                       </ion-avatar>\n                        <h5>میدان نهم دی</h5>\n                       </ion-item>\n                    \n                        <ion-item dir=\"rtl\">\n                          <ion-avatar item-end>\n                          <ion-icon name=\"subway\"></ion-icon>\n                         </ion-avatar>\n                          <h5>گلزار هفتم</h5>\n                         </ion-item>\n                        >\n                          <ion-item dir=\"rtl\">\n                            <ion-avatar item-end>\n                            <ion-icon name=\"subway\"></ion-icon>\n                           </ion-avatar>\n                            <h5>کوی قدس</h5>\n                           </ion-item>\n                          \n                            <ion-item dir=\"rtl\">\n                              <ion-avatar item-end>\n                              <ion-icon name=\"subway\"></ion-icon>\n                             </ion-avatar>\n                              <h5>زندان</h5>\n                             </ion-item>\n                               <ion-item dir=\"rtl\">\n                                <ion-avatar item-end>\n                                <ion-icon name=\"subway\"></ion-icon>\n                               </ion-avatar>\n                                <h5>پل یزدآباد</h5>\n                               </ion-item>\n  </ion-list>\n \n        \n</ion-content>"

/***/ }),

/***/ "./src/app/pages/stops/tab2/num1/num1.page.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/stops/tab2/num1/num1.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar {\n  --ion-color-base: #577cd5;\n  /* fallback for old browsers */\n  --ion-color-base: -webkit-linear-gradient(to right, #577cd5, #66236e);\n  /* Chrome 10-25, Safari 5.1-6 */\n  --ion-color-base: linear-gradient(to right, #577cd5, #66236e); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3RvcHMvdGFiMi9udW0xL0Q6XFxoeWJyaWRfbW9iaWxlX2FwcFxcTWFwYXBwL3NyY1xcYXBwXFxwYWdlc1xcc3RvcHNcXHRhYjJcXG51bTFcXG51bTEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQWlCO0VBQ2pCLDhCQUFBO0VBQ0EscUVBQWlCO0VBQ2pCLCtCQUFBO0VBQ0EsNkRBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdG9wcy90YWIyL251bTEvbnVtMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi10b29sYmFyIHtcclxuICAgIC0taW9uLWNvbG9yLWJhc2U6ICM1NzdjZDU7XHJcbiAgICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzU3N2NkNSwgIzY2MjM2ZSk7XHJcbiAgICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xyXG4gICAgLS1pb24tY29sb3ItYmFzZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNTc3Y2Q1LCAjNjYyMzZlKTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/stops/tab2/num1/num1.page.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/stops/tab2/num1/num1.page.ts ***!
  \****************************************************/
/*! exports provided: Num1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Num1Page", function() { return Num1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Num1Page = /** @class */ (function () {
    function Num1Page() {
    }
    Num1Page.prototype.ngOnInit = function () {
    };
    Num1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-num1',
            template: __webpack_require__(/*! ./num1.page.html */ "./src/app/pages/stops/tab2/num1/num1.page.html"),
            styles: [__webpack_require__(/*! ./num1.page.scss */ "./src/app/pages/stops/tab2/num1/num1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Num1Page);
    return Num1Page;
}());



/***/ })

}]);
//# sourceMappingURL=num1-num1-module.js.map