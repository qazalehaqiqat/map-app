import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '../app/services/login-service.service';
import { Router } from '@angular/router';

/*
  Generated class for the ProvidersUserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
 user: any;
  constructor(public http: HttpClient, public loginService: LoginService) {
    console.log('Hello ProvidersOfferProvider Provider');
    this.user = {};
  }

}