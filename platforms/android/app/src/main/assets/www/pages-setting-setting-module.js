(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-setting-setting-module"],{

/***/ "./src/app/pages/setting/setting.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/setting/setting.module.ts ***!
  \*************************************************/
/*! exports provided: SettingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageModule", function() { return SettingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setting.page */ "./src/app/pages/setting/setting.page.ts");







var routes = [
    {
        path: '',
        component: _setting_page__WEBPACK_IMPORTED_MODULE_6__["SettingPage"]
    }
];
var SettingPageModule = /** @class */ (function () {
    function SettingPageModule() {
    }
    SettingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_setting_page__WEBPACK_IMPORTED_MODULE_6__["SettingPage"]]
        })
    ], SettingPageModule);
    return SettingPageModule;
}());



/***/ }),

/***/ "./src/app/pages/setting/setting.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/setting/setting.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title slot=\"end\" style=\"color: white\">تنظیمات</ion-title>\n    <ion-buttons>\n      <ion-back-button style=\"color: white\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <img class=\"user-avatar\" [src]=\"croppedImagepath\">\n    <ion-fab class=\"user-add-avatar\" slot=\"fixed\" (click)=\"addUserAvatar()\">\n        <ion-fab-button class=\"user-add-avatar-fab\">\n          <ion-icon name=\"camera\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n    <span class=\"user-fullname\">{{UserProvider.user.Name}} {{UserProvider.user.LastName}} </span>\n    <span class=\"user-level\">{{UserProvider.user.Level}} </span>\n</ion-content>\n\n<!-- src=\"../../../assets/avatar.svg\" -->"

/***/ }),

/***/ "./src/app/pages/setting/setting.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/setting/setting.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img.user-avatar {\n  width: 113.7px;\n  height: 113.7px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 25px;\n  border: 5px solid #66236e;\n  border-radius: 50%; }\n\nspan.user-fullname {\n  font-size: 23px;\n  letter-spacing: -0.4px;\n  color: #66236e;\n  display: block;\n  text-align: center;\n  margin-top: 50px; }\n\nspan.user-level {\n  font-size: 15px;\n  letter-spacing: -0.4px;\n  color: #66236e;\n  display: block;\n  text-align: center; }\n\n.user-add-avatar {\n  margin: 100px;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  padding-left: 15px; }\n\n.user-add-avatar .user-add-avatar {\n  --background: #66236e !important\r\n  ; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2V0dGluZy9EOlxcaHlicmlkX21vYmlsZV9hcHBcXE1hcGFwcC9zcmNcXGFwcFxccGFnZXNcXHNldHRpbmdcXHNldHRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssY0FBYztFQUNkLGVBQWU7RUFLaEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFFbEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsY0FBZTtFQUNmLGNBQWM7RUFDZCxrQkFFRixFQUFBOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFO0VBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmcvc2V0dGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcudXNlci1hdmF0YXIge1xyXG4gICAgIHdpZHRoOiAxMTMuN3B4O1xyXG4gICAgIGhlaWdodDogMTEzLjdweDtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLy8gcGFkZGluZzogMjVweDtcclxuICAgIC8vIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgLy93aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkICM2NjIzNmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuICBzcGFuLnVzZXItZnVsbG5hbWUge1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgIGNvbG9yOiAjNjYyMzZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIH1cclxuICBzcGFuLnVzZXItbGV2ZWwge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgIGNvbG9yOiAgIzY2MjM2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcblxyXG4gIH1cclxuXHJcbiAgLnVzZXItYWRkLWF2YXRhcntcclxuICAgIG1hcmdpbjogMTAwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLnVzZXItYWRkLWF2YXRhciAudXNlci1hZGQtYXZhdGFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNjYyMzZlICFpbXBvcnRhbnRcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/setting/setting.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/setting/setting.page.ts ***!
  \***********************************************/
/*! exports provided: SettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPage", function() { return SettingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_userProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../providers/userProvider */ "./src/providers/userProvider.ts");
/* harmony import */ var _services_login_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login-service.service */ "./src/app/services/login-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");








var SettingPage = /** @class */ (function () {
    // tslint:disable-next-line:no-shadowed-variable
    function SettingPage(UserProvider, loginService, toastCtrl, crop, imagePicker, file) {
        this.UserProvider = UserProvider;
        this.loginService = loginService;
        this.toastCtrl = toastCtrl;
        this.crop = crop;
        this.imagePicker = imagePicker;
        this.file = file;
        this.isLoading = false;
        this.croppedImagepath = '../../../assets/avatar.svg';
        this.imagePickerOptions = {
            maximumImagesCount: 1,
            quality: 50
        };
    }
    SettingPage.prototype.ngOnInit = function () {
    };
    // addUserAvatar() {
    //   console.log('hi');
    //   this.presentToast();
    // }
    // async presentToast() {
    //   const toast = await this.toastCtrl.create({
    //     message: 'این قابلیت در نسخه بعد اضافه خواهد شد',
    //     duration: 5000,
    //     position: 'bottom',
    //   });
    //   toast.present();
    // }
    // addUserAvatar() {
    //   this.options = {
    //     width: 200,
    //     outputType: 1
    //   };
    //   this.imageResponse = [];
    //   this.imagePicker.getPictures(this.options).then((results) => {
    //     // tslint:disable-next-line:prefer-for-of
    //     for (let i = 0; i < results.length; i++) {
    //       this.imageResponse.push('data:image/jpeg;base64,' + results[i]);
    //     }
    //   }, (err) => {
    //     alert(err);
    //   });
    // }
    SettingPage.prototype.addUserAvatar = function () {
        var _this = this;
        this.imagePicker.getPictures(this.imagePickerOptions).then(function (results) {
            // tslint:disable-next-line:prefer-for-of
            for (var i = 0; i < results.length; i++) {
                _this.cropImage(results[i]);
            }
        }, function (err) {
            alert(err);
        });
    };
    SettingPage.prototype.cropImage = function (imgPath) {
        var _this = this;
        this.crop.crop(imgPath, { quality: 50 })
            .then(function (newPath) {
            _this.showCroppedImage(newPath.split('?')[0]);
        }, function (error) {
            alert('Error cropping image' + error);
        });
    };
    SettingPage.prototype.showCroppedImage = function (ImagePath) {
        var _this = this;
        this.isLoading = true;
        var copyPath = ImagePath;
        var splitPath = copyPath.split('/');
        var imageName = splitPath[splitPath.length - 1];
        var filePath = ImagePath.split(imageName)[0];
        this.file.readAsDataURL(filePath, imageName).then(function (base64) {
            _this.croppedImagepath = base64;
            _this.isLoading = false;
        }, function (error) {
            alert('Error in showing image' + error);
            _this.isLoading = false;
        });
    };
    SettingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-setting',
            template: __webpack_require__(/*! ./setting.page.html */ "./src/app/pages/setting/setting.page.html"),
            styles: [__webpack_require__(/*! ./setting.page.scss */ "./src/app/pages/setting/setting.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_userProvider__WEBPACK_IMPORTED_MODULE_2__["UserProvider"], _services_login_service_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_5__["Crop"],
            _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__["ImagePicker"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"]])
    ], SettingPage);
    return SettingPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-setting-setting-module.js.map