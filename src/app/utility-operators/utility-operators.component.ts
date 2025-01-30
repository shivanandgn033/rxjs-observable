import { Component } from '@angular/core';
import { of, tap } from 'rxjs';

@Component({
  selector: 'app-utility-operators',
  imports: [],
  templateUrl: './utility-operators.component.html',
  styleUrl: './utility-operators.component.css'
})
export class UtilityOperatorsComponent {
  
  // tap(next, error, complete): Performs side effects (e.g., logging) without modifying the emitted values.
funcTapOperators()
{
  of(1, 2, 3).pipe(tap((x:any) => console.log('before:', x))).subscribe((val:any) => console.log('value:', val));
}
// delay(duration): Delays the emission of values by a specified duration.

// timeout(due): Errors if no value is emitted within a specified duration.

}
