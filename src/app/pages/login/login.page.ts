import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../../services/login-service.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { LoadingController, NavParams } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import {UserProvider } from '../../../providers/userProvider';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  phoneNumber: string;
  password: string;
  results: Observable<any>;
  loading: any;

  constructor(private http: HttpClient, public loginService: LoginService,
              public router: Router,
              // tslint:disable-next-line:no-shadowed-variable
              public UserProvider: UserProvider,
              public loadingCtrl: LoadingController,
              private toastCtrl: ToastController) {
    this.phoneNumber = '';
    this.password = '';
  }

  ngOnInit() {
  }

  showLoader() {
    this.loading = this.loadingCtrl.create({
      spinner: 'dots'
    }).then((res) => {
      res.present();
      res.onDidDismiss().then((dis) => {
        console.log('Loading dismissed!');
      });
    });
  }
  hideLoader() {
      this.loadingCtrl.dismiss();
  }

  async login() {
    this.UserProvider.user = {};
    this.showLoader();
    console.log('ph: ' + this.phoneNumber + 'pass: ' + this.password);
    this.loginService.login(this.phoneNumber,  this.password).subscribe(data => {
       this.UserProvider.user = data.Data;
       console.log('this.loginService', this.UserProvider);
       if (data.Validate) {
        console.log(data);
        this.router.navigateByUrl('menu');
        this.hideLoader();
      } else {
        this.presentToast();
        this.hideLoader();

      }
    });
  }
  async register() {
    this.router.navigateByUrl('/register');
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'رمز عبور یا شماره تلفن اشتباه است',
      duration: 5000
    });
    toast.present();
  }

}
