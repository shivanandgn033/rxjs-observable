"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// Create an Observable that emits an array of numbers
var source = (0, rxjs_1.from)([1, 2, 3, 4, 5]);
// Subscribe to the Observable and log the emitted values
source.subscribe(function (value) { return console.log('Value:', value); });
// ouput
// Value: 1
// Value: 2
// Value: 3
// Value: 4
// Value: 5
// Create an Observable that emits a single value
var singleValue = (0, rxjs_1.of)('Hello, RxJS!');
singleValue.subscribe(function (value) { return console.log('Single Value:', value); });
// output
// Single Value: Hello, RxJS!
var singlevaluecheck = (0, rxjs_1.from)([1, 2, 2, 3, 5, 6]);
singlevaluecheck.subscribe(function (res) { return console.log("single value:", res); });
// output : obj multiple values
// single value: 1
// single value: 2
// single value: 2
// single value: 3
// single value: 5
// single value: 6
// Create an Observable that emits numbers every second
//const intervalObservable = interval(1000); // Emits every 1 second
//intervalObservable.subscribe((value:any) => console.log('Interval:', value));
// Example using operators...
var sourceWithOperators = (0, rxjs_1.from)([1, 2, 3, 4, 5])
    .pipe((0, operators_1.filter)(function (value) { return value % 2 === 0; }), // Filter even numbers
(0, operators_1.map)(function (value) { return value * 2; }) // Double the values
);
//   const source1=from([1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20]).pipe().filter(
//       (res:any)=>res%2===0
//   ).map((res:any)=>res*2);
//   source1.subscribe((res:any)=>console.log(res));
var source2 = (0, rxjs_1.from)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20]).pipe((0, operators_1.filter)(function (res) { return res % 2 === 0; }), (0, operators_1.map)(function (res) { return res * 3; }));
//   output result
//   6
//   12
//   18
//   24
//   30
//   36
//   42
//   48
//   54
//   60
source2.subscribe(function (res) { return console.log(res); });
sourceWithOperators.subscribe(function (value) { return console.log('Filtered and Mapped:', value); });
// output
// Filtered and Mapped: 4
// Filtered and Mapped: 8
function fetchData() {
    return (0, rxjs_1.from)([1, 2, 4, 6, 1, 4, 6, 7, 7, 7, 45, 75]);
}
var loading;
var error;
fetchData()
    .subscribe({
    next: function (data) {
        data = data;
        console.log(data);
        loading = true;
        console.log(loading);
    },
    error: function (err) {
        error = err.message;
        console.log(error);
        loading = false;
        console.log(loading);
    },
});
var observable2 = new rxjs_1.Observable(function (res) {
    setTimeout(function () {
        res.next('rxjs call method 1');
        res.next('rxjs call method 2');
        res.next('rxjs call method 3');
        res.next();
    }, 3);
});
observable2.pipe((0, operators_1.filter)(function (res) { return res == 'rxjs call method 1'; }), (0, operators_1.map)(function (res) { return res = "objservable " + res; })).subscribe(function (res) { return console.log(res); });
// operators:
// switchMap: Cancels previous inner Observables when a new value is emitted by the source Observable.
// concatMap: Subscribes to the inner Observables one by one, waiting for each to complete before subscribing to the next.
// debounceTime: Suppresses frequent emissions, emitting only the last value within a specified time window.
// take: Emits only the first 'n' values emitted by the source Observable.
// takeUntil: Subscribes and operates on values from the source Observable until another Observable emits a value.
// rxjs subject and bhaviroal subject.
//const delays$ = of(1000, 2000, Infinity, 3000);
// delays$.pipe(
//   concatMap((ms:any) => {
//     if (ms < 10000) {
//       return timer(ms);
//     } else {
//       // Cleaner and easier to read for most folks.
//      // throw new Error(`Invalid time ${ ms }`);
//      return throwError(() => new Error(`Invalid time ${ ms }`));
//     }
//   })
// )
// .subscribe({
//   next: console.log,
//   error: console.error
// });
//...............................................
var observable$ = new rxjs_1.Observable(function (observer) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
});
var observer1 = {
    next: function (data) {
        console.log('observer 1' + data);
    },
    error: function (error) {
        console.log(error);
    },
    complete: function () {
        console.log('observer 1 complete');
    },
};
var observer2 = {
    next: function (data) {
        console.log('observer 2' + data);
    },
    error: function (error) {
        console.log(error);
    },
    complete: function () {
        console.log('observer 2 complete');
    },
};
observable$.subscribe(observer1); //1,2,3,complete
observable$.subscribe(observer2); //1,2,3, complete
//...................................
observable$ = (0, rxjs_1.of)(1, 2, 3, 4, 5); //execute one tinme
var subject = new rxjs_1.Subject();
observer1 = {
    next: function (data) {
        console.log('observer 1' + data);
    },
    error: function (error) {
        console.log(error);
    },
    complete: function () {
        console.log('observer 1 complete');
    },
};
observer2 = {
    next: function (data) {
        console.log('observer 2' + data);
    },
    error: function (error) {
        console.log(error);
    },
    complete: function () {
        console.log('observer 2 complete');
    },
};
subject.subscribe(observer1);
subject.subscribe(observer2);
observable$.subscribe(subject);
