import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login-service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { LoadingController, NavParams } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import {UserProvider } from '../../../providers/userProvider';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  phoneNumber: string;
  password: string;
  name: string;
  lastName: string;
  Email: string;
  results: Observable<any>;
  constructor(public http: HttpClient, public loginService: LoginService,
              public router: Router,
              // tslint:disable-next-line:no-shadowed-variable
              public UserProvider: UserProvider) {
      this.phoneNumber = '';
      this.password = '';
      this.name = '';
      this.lastName = '';
      this.Email = '';
    }

  ngOnInit() {}
 async register() {
   console.log('Email', this.Email);
   this.loginService.register(this.phoneNumber,  this.password, this.lastName, this.name, this.Email).subscribe(data => {
    this.loginService.user = data.Data;
    if (data.Validate) {
     console.log(data);
     this.router.navigateByUrl('login');

    }
 });
 }
}


