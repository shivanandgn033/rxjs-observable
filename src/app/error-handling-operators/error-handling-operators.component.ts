import { Component } from '@angular/core';
import { of, catchError, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-error-handling-operators',
  imports: [],
  templateUrl: './error-handling-operators.component.html',
  styleUrl: './error-handling-operators.component.css'
})
export class ErrorHandlingOperatorsComponent {

  // catchError(selector): Catches errors on the observable to be handled by returning a new observable or throwing an error.

  funcCatchError() {
    of(1, 2, 3, 4).pipe(
      map(n => {
        if (n === 3) {
          throw 'Number 3!';
        }
        return n;
      }),
      catchError((err: any) => {
        console.error(err);
        return of(10, 20);
      })
    ).subscribe((val: any) => console.log('catchError:', val)); // Output: 1, 2, 10, 20
  }

 // retry(count): Retries the observable sequence a specified number of times if an error occurs.

}
