import { Component, ElementRef, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { of,from , interval, take, fromEvent } from 'rxjs';
@Component({
  selector: 'app-creation-operators',
  imports: [],
  templateUrl: './creation-operators.component.html',
  styleUrl: './creation-operators.component.css'
})
export class CreationOperatorsComponent implements AfterViewInit,OnDestroy {

  // of(...values): Emits a sequence of values and then completes.
   arryvalue= of(1, 2, 3);

   singleValue = of('Hello, RxJS!');
  funcallOfOperator(){
    this.arryvalue.subscribe((val:number) => console.log('of:', val)); // Output: 1, 2, 3
   this.singleValue.subscribe((value:any) => console.log('Single Value:', value));
  }


  // from(iterable | Promise | array-like): Creates an observable from an iterable, Promise, or array-like object.

   promise = Promise.resolve('Hello');

   array = [10, 20, 30];

  funcallFromOperator()
  {
    from(this.promise).subscribe((val:any) => console.log('from promise:', val)); // Output: Hello
    from(this.array).subscribe((val:any) => console.log('from array:', val)); // Output: 10, 20, 30
  }

  //interval(period): Emits sequential numbers at a specified interval (in milliseconds).
  funcallIntervalOperator(){
  interval(1000).pipe(take(3)).subscribe((val:any) => console.log('interval:', val)); // Output: 0, 1, 2 (every 1s)
  }

  // fromEvent(target, eventName): Creates an observable from DOM events.
  @ViewChild('myButton') myButton!: ElementRef;
  clickSubscription: any;
  ngAfterViewInit() {
    this.clickSubscription = fromEvent(this.myButton.nativeElement, 'click').subscribe(() => console.log('Button clicked!'));
  }
  ngOnDestroy(){
    this.clickSubscription.unsubscribe();
  }

}
