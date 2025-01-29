import { Component, ElementRef, ViewChild } from '@angular/core';
import {  of, interval, take, fromEvent, debounceTime } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-filtering-operators',
  imports: [],
  templateUrl: './filtering-operators.component.html',
  styleUrl: './filtering-operators.component.css'
})
export class FilteringOperatorsComponent {
 // take(count): Emits only the first count values.
 funcTakeFilter(){
  interval(1000).pipe(take(3)).subscribe((val:any) => console.log('take:', val)); // Output: 0, 1, 2
 }

 // debounceTime(duration): Emits a value only after a specified time has passed since the last emission.
 @ViewChild('myButton') myButton!: ElementRef;
 funcDebounceTimeFilter()
 {
  fromEvent(this.myButton.nativeElement, 'click').pipe(debounceTime(300)).subscribe(() => console.log('Debounced click'));
 }

 // distinctUntilChanged(): Emits a value only if it is different from the previous emitted value.

 funcDistinctUntilChanged()
 {
  of(1, 1, 2, 2, 3).pipe(distinctUntilChanged()).subscribe((val:any) => console.log('distinctUntilChanged:', val)); // Output: 1, 2, 3
 }

}
