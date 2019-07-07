import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Http } from '@angular/http';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // myParam: any;
  user: any;
  url: string;
  constructor(private http: HttpClient) {
    this.url = 'https://begoo.herokuapp.com/';
   }

private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  // tslint:disable-next-line:ban-types
  login(phoneNumber: string,  password: string): Observable<any> {
    // const user = {PhoneNumber: data.PhoneNumber, Password: 1};
    // console.log('data: ' , data);
   // console.log('user: ' , user);
    // console.log('json user: ' , JSON.stringify(user));
    const body = new HttpParams()
    .set('PhoneNumber', phoneNumber)
    .set('Password', password);
    console.log('body: ' , body);
    const url = this.url + 'user/login';
    console.log('url: ' , url);

    return this.http.post(url,  body);
  }

  logout(phoneNumber: string,  password: string): Observable<any> {
    // const user = {PhoneNumber: data.PhoneNumber, Password: 1};
    // console.log('data: ' , data);
   // console.log('user: ' , user);
    // console.log('json user: ' , JSON.stringify(user));
    const body = new HttpParams()
    .set('PhoneNumber', phoneNumber)
    .set('Password', password);
    console.log('body: ' , body);
    const url = this.url + 'user/login';
    console.log('url: ' , url);

    return this.http.post(url,  body);
  }

  register(phoneNumber: string,  password: string, lastName: string, name: string, email: string): Observable<any> {
    // const user = {PhoneNumber: data.PhoneNumber, Password: 1};
    console.log('phoneNumber: ' , phoneNumber);
    console.log('password: ' , password);
    console.log('lastName: ' , lastName);
    console.log('name: ' , name);
    console.log('email: ' , email);

    const body = new HttpParams()
    .set('PhoneNumber', phoneNumber)
    .set('Password', password)
    .set('Name', name)
    .set('Email', email)
    .set('LastName', lastName);
    console.log('body: ' , body);
    const url = this.url + 'user/signup';
    console.log('url: ' , url);

    return this.http.post(url,  body);
  }
}
