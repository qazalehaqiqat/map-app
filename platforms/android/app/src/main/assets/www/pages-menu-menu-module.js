(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-menu-menu-module"],{

/***/ "./src/app/pages/menu/menu.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.module.ts ***!
  \*******************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.page */ "./src/app/pages/menu/menu.page.ts");
/* harmony import */ var mapir_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mapir-angular */ "./node_modules/mapir-angular/fesm5/mapir.js");








var routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"],
    }
];
var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                mapir_angular__WEBPACK_IMPORTED_MODULE_7__["Map"]
            ],
            declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
        })
    ], MenuPageModule);
    return MenuPageModule;
}());



/***/ }),

/***/ "./src/app/pages/menu/menu.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar> -->\n    <!-- <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    -->\n    <!-- <ion-title slot=\"end\">\n    صفحه اصلی\n    </ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<content>\n  \n      <div class=\"mapp\"> <!-- not a typo : map + app -->\n        <mapir-map\n            [mapPosition] = \"{lat: 32.654629, lng: 51.667984}\"\n            [zoom] = \"20\"\n            [markerPositions] = \"[{lat: 32.654629, lng: 51.667984}]\"\n\n        > </mapir-map>\n              \n      </div>\n      \n      <ion-fab vertical=\"bottom\" horizontal=\"start\">\n      <ion-fab-button (click)=\"\n      currentposition()\" data-desc=\"Description 2\">\n          <ion-icon name=\"locate\"></ion-icon>\n          </ion-fab-button>\n      </ion-fab>\n      <ion-fab vertical=\"bottom\" horizontal=\"end\">\n          <ion-fab-button>\n            <ion-icon name=\"md-menu\"></ion-icon>\n          </ion-fab-button>\n          <ion-fab-list side=\"top\">\n                <ion-fab-button (click)=\"setting()\" data-desc=\"Description 2\">\n                  <img src='../../../assets/setting.png'>\n                  </ion-fab-button>\n                <ion-fab-button (click)=\"schedule()\" data-desc=\"Description 1\">\n                  <img src='../../../assets/Subway.png'>\n              </ion-fab-button>\n              <ion-fab-button (click)=\"stop()\" data-desc=\"Description 1\">\n                  <img src='../../../assets/busstation.png'>\n                </ion-fab-button>\n            </ion-fab-list>\n            \n         \n        </ion-fab> \n   </content>\n  \n      \n      <!-- <ion-fab vertical=\"bottom\" horizontal=\"end\">\n          <ion-fab-button>\n            <ion-icon name=\"add\"></ion-icon>\n          </ion-fab-button>\n          <ion-fab-list side=\"top\">\n            <ion-fab-button (click)=\"do1()\" data-desc=\"Description 1\">\n              <ion-icon name=\"contact\"></ion-icon>\n            </ion-fab-button>\n            <ion-fab-button (click)=\"do2()\" data-desc=\"Description 2\">\n              <ion-icon name=\"person-add\"></ion-icon>\n            </ion-fab-button>\n          </ion-fab-list>\n        </ion-fab> -->\n    \n<!-- <ion-menu side=\"end\" type=\"overlay\"  >\n  <ion-content>\n  \n    <ion-list>\n      <ion-item menu-close href=\"/stops\">\n        \n      ایستگاه\n    \n    </ion-item>\n     <ion-item menu-close href=\"/schedule\">\n        \n      زمانبندی\n    \n    </ion-item>\n    \n     <ion-item menu-close href=\"/setting\">\n        \n      تنظیمات\n    \n    </ion-item>\n    </ion-list>\n  </ion-content>\n  \n</ion-menu>\n<div class=\"ion-page\" main>\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu - Basic</ion-title>\n    </ion-toolbar>\n  </ion-header>\n \n</div>\n\n \n -->\n"

/***/ }),

/***/ "./src/app/pages/menu/menu.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mapp {\n  width: 850px;\n  height: 750px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVudS9EOlxcaHlicmlkX21vYmlsZV9hcHBcXE1hcGFwcC9zcmNcXGFwcFxccGFnZXNcXG1lbnVcXG1lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnUvbWVudS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwcCB7XHJcbiAgICB3aWR0aDogODUwcHg7XHJcbiAgICBoZWlnaHQ6IDc1MHB4O1xyXG4gIH1cclxuICJdfQ== */"

/***/ }),

/***/ "./src/app/pages/menu/menu.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/menu/menu.page.ts ***!
  \*****************************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var mapir_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mapir-angular */ "./node_modules/mapir-angular/fesm5/mapir.js");





//import {  tileLayer, marker } from 'leaflet';
var lat;
var lng;
var currentlocation = { lat: "", lng: "" };
var L;
var MenuPage = /** @class */ (function () {
    function MenuPage(router, geolocation, map) {
        this.router = router;
        this.geolocation = geolocation;
        this.map = map;
    }
    MenuPage.prototype.setting = function () {
        this.router.navigateByUrl('/setting');
    };
    MenuPage.prototype.schedule = function () {
        this.router.navigateByUrl('/schedule');
    };
    MenuPage.prototype.stop = function () {
        this.router.navigateByUrl('/stops');
    };
    MenuPage.prototype.currentposition = function (position) {
        this.geolocation.getCurrentPosition().then(function (position) {
            lat = position.coords.latitude;
            lng = position.coords.longitude;
            console.log('My latitude : ', position.coords.latitude);
            console.log('My longitude: ', position.coords.longitude);
            currentlocation.lat = lat;
            currentlocation.lng = lng;
            //const markPoint = marker([lat, lng]);
            //var marker = marker([lat, lng]).addTo(this.map);
        });
    };
    MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.page.html */ "./src/app/pages/menu/menu.page.html"),
            styles: [__webpack_require__(/*! ./menu.page.scss */ "./src/app/pages/menu/menu.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"],
            mapir_angular__WEBPACK_IMPORTED_MODULE_4__["Map"]])
    ], MenuPage);
    return MenuPage;
}());

// currentlocation(){
//  this.geolocation.getCurrentPosition().then((resp) => {
//      resp.coords.latitude
//     resp.coords.longitude
//    }).catch((error) => {
//      console.log('Error getting location', error);
//    });
//    let watch = this.geolocation.watchPosition();
//    watch.subscribe((data) => {
//     // data can be a set of coordinates, or an error (if an error occurred).
//     data.coords.latitude
//     data.coords.longitude
//    });
//}}


/***/ })

}]);
//# sourceMappingURL=pages-menu-menu-module.js.map