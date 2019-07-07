import { Component, OnInit } from '@angular/core';
import {UserProvider } from '../../../providers/userProvider';
import { LoginService } from '../../services/login-service.service';
import { ToastController } from '@ionic/angular';
import { Crop } from '@ionic-native/crop/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { File } from '@ionic-native/file/ngx';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  name: string;
  lastName: string;
  // tslint:disable-next-line:no-shadowed-variable
  constructor(public UserProvider: UserProvider, public loginService: LoginService,
              private toastCtrl: ToastController,  private crop: Crop,
              private imagePicker: ImagePicker,
              private file: File
    ) {
      this.lastName =  UserProvider.user.lastName;
      this.name = UserProvider.user.name;
    }

    imageResponse: any;
    options: any;
    isLoading = false;

    croppedImagepath = '../../../assets/avatar.svg';

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };
  ngOnInit() {
  }

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

  addUserAvatar() {
    this.imagePicker.getPictures(this.imagePickerOptions).then((results) => {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < results.length; i++) {
        this.cropImage(results[i]);
      }
    }, (err) => {
      alert(err);
    });
  }
  cropImage(imgPath) {
    this.crop.crop(imgPath, { quality: 50 })
      .then(
        newPath => {
          this.showCroppedImage(newPath.split('?')[0]);
        },
        error => {
          alert('Error cropping image' + error);
        }
      );
  }

  showCroppedImage(ImagePath) {
    this.isLoading = true;
    const copyPath = ImagePath;
    const splitPath = copyPath.split('/');
    const imageName = splitPath[splitPath.length - 1];
    const filePath = ImagePath.split(imageName) [0];
    this.file.readAsDataURL(filePath, imageName).then(base64 => {
        this.croppedImagepath = base64;
        this.isLoading = false;
    }, error => {
      alert('Error in showing image' + error);
      this.isLoading = false;
    });
  }


}
