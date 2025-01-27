import { Component, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  throwError } from 'rxjs';
import { retry, catchError, delay } from 'rxjs/operators';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-httprequestretry',
  imports: [CommonModule,JsonPipe],
  templateUrl: './httprequestretry.component.html',
  styleUrl: './httprequestretry.component.css'
})
export class HttprequestretryComponent {
  data:any;
  errorMessage:string |null=null;
  _http=inject(HttpClient);
  apiurl:string="https://jsonplaceholder.typicode.com/todos/1";

  getdata() {
    this.data=null;
    this.errorMessage=null;
   return this._http.get(this.apiurl).pipe(
     retry(3), // retry 3 times by default
     catchError(this.handleError)
   ).subscribe({next:(response:any)=>{
     this.data=response;
   },error:(error:any)=> {
     this.errorMessage="Backend error : "+error
   console.error('Error:', error)
   }
   });
 }

private handleError(error: HttpErrorResponse) {
 console.log(error.status);
// this.errorMesage="Backedn returned code "+error.status
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
 return throwError(() => 'Something bad happened; please try again later.');
}
}
