(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-schedule-schedule-module"],{

/***/ "./src/app/pages/schedule/schedule.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/schedule/schedule.module.ts ***!
  \***************************************************/
/*! exports provided: SchedulePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulePageModule", function() { return SchedulePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _schedule_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schedule.page */ "./src/app/pages/schedule/schedule.page.ts");







var routes = [
    {
        path: '',
        component: _schedule_page__WEBPACK_IMPORTED_MODULE_6__["SchedulePage"]
    }
];
var SchedulePageModule = /** @class */ (function () {
    function SchedulePageModule() {
    }
    SchedulePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_schedule_page__WEBPACK_IMPORTED_MODULE_6__["SchedulePage"]]
        })
    ], SchedulePageModule);
    return SchedulePageModule;
}());



/***/ }),

/***/ "./src/app/pages/schedule/schedule.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/schedule/schedule.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n \n    <ion-toolbar>\n      <ion-title text-center style=\"color: white\">زمانبندی</ion-title>\n      <ion-buttons slot=\"start\">\n        <ion-back-button style=\"color: white\"></ion-back-button>\n      </ion-buttons>\n    </ion-toolbar>\n  \n  </ion-header>\n    <ion-content>\n      <h5 text-center>وسیله ی نقلیه ی موردنظر خود را انتخاب کنید</h5>\n    <ion-list>\n  \n        <ion-item href=\"/img\"  dir=\"rtl\" > \n      \n          <ion-label text-center > مترو</ion-label>\n        </ion-item>\n      \n        <ion-item href=\"/img\"  dir=\"rtl\" > \n         \n          <ion-label text-center> اتوبوس</ion-label>\n        </ion-item>\n        <ion-item href=\"/img\"  dir=\"rtl\" > \n       \n          <ion-label text-center >  BRT</ion-label>\n        </ion-item>\n  </ion-list>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/pages/schedule/schedule.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/schedule/schedule.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item ion-label {\n  font-family: vazir; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2NoZWR1bGUvRDpcXGh5YnJpZF9tb2JpbGVfYXBwXFxNYXBhcHAvc3JjXFxhcHBcXHBhZ2VzXFxzY2hlZHVsZVxcc2NoZWR1bGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zY2hlZHVsZS9zY2hlZHVsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSBpb24tbGFiZWx7XHJcbiAgICBmb250LWZhbWlseTogdmF6aXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/schedule/schedule.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/schedule/schedule.page.ts ***!
  \*************************************************/
/*! exports provided: SchedulePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulePage", function() { return SchedulePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SchedulePage = /** @class */ (function () {
    function SchedulePage() {
    }
    SchedulePage.prototype.ngOnInit = function () {
    };
    SchedulePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-schedule',
            template: __webpack_require__(/*! ./schedule.page.html */ "./src/app/pages/schedule/schedule.page.html"),
            styles: [__webpack_require__(/*! ./schedule.page.scss */ "./src/app/pages/schedule/schedule.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SchedulePage);
    return SchedulePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-schedule-schedule-module.js.map