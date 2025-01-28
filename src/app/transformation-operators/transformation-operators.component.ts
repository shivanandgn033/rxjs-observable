import { Component } from '@angular/core';
import { of, map, scan , filter , switchMap, delay } from 'rxjs';

@Component({
  selector: 'app-transformation-operators',
  imports: [],
  templateUrl: './transformation-operators.component.html',
  styleUrl: './transformation-operators.component.css'
})
export class TransformationOperatorsComponent {

 // map(projection): Applies a function to each emitted value.

 funcMapProjection()
 {
  of(1, 2, 3).pipe(map((x:any) => x * 2)).subscribe((val:any) => console.log('map:', val)); // Output: 2, 4, 6
 }

 // filter(predicate): Emits only values that satisfy a condition.
 funcFilterPredicate()
 {
  of(1, 2, 3, 4, 5).pipe(filter((x:any) => x % 2 === 0)).subscribe((val:any) => console.log('filter:', val)); // Output: 2, 4
 }

 // scan(accumulator, seed): Applies an accumulator function over the source Observable, and returns each intermediate result, with an optional seed value.
 
 funcScanAccumulatorSeed()
 {
  of(1, 2, 3).pipe(scan((acc:any, val:any) => acc + val, 0)).subscribe((val:any) => console.log('scan:', val)); // Output: 1, 3, 6
 }

 // switchMap(projection): Projects each source value to an Observable, emitting values only from the most recently projected Observable. Cancels previous inner Observables. Ideal for search-as-you-type scenarios.

 funcSwitchMapProjection()
 {
  of('a', 'b', 'c').pipe(switchMap((x:any) => of(x + '!').pipe(delay(1000)))).subscribe((val:any) => console.log('switchMap:', val)); // Output: c! (after ~3s)
 }

 // mergeMap (alias flatMap): Projects each source value to an Observable and merges the resulting Observables. Useful for parallel operations. Use with caution as order is not guaranteed.

 // concatMap: Projects each source value to an Observable, concatenating the resulting Observables. Maintains order.

}
