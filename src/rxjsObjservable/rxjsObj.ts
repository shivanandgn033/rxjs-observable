import { Observable, from, of, interval, concatMap,throwError, timer} from 'rxjs';
import { map, filter } from 'rxjs/operators';

// Create an Observable that emits an array of numbers
const source = from([1, 2, 3, 4, 5]);

// Subscribe to the Observable and log the emitted values
source.subscribe( (value:any) => console.log('Value:', value));
// ouput
// Value: 1
// Value: 2
// Value: 3
// Value: 4
// Value: 5

// Create an Observable that emits a single value
const singleValue = of('Hello, RxJS!');
singleValue.subscribe((value:any) => console.log('Single Value:', value));

// output
// Single Value: Hello, RxJS!

const singlevaluecheck=from([1,2,2,3,5,6]);
singlevaluecheck.subscribe((res:any)=>console.log("single value:",res));

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

// Example using operators
const sourceWithOperators = from([1, 2, 3, 4, 5])
  .pipe(
    filter((value:number )=> value % 2 === 0), // Filter even numbers
    map((value:any) => value * 2) // Double the values
  );
  
//   const source1=from([1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20]).pipe().filter(
//       (res:any)=>res%2===0
//   ).map((res:any)=>res*2);
  
//   source1.subscribe((res:any)=>console.log(res));

  const source2=from([1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20]).pipe(
      filter((res:number)=>res%2===0),
      map((res:number)=>res*3)
  );
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

source2.subscribe((res:number)=>console.log(res));

sourceWithOperators.subscribe((value:any) => console.log('Filtered and Mapped:', value)); 
// output
// Filtered and Mapped: 4
// Filtered and Mapped: 8


function fetchData(): Observable<any> {

    return from([1,2,4,6,1,4,6,7,7,7,45,75]); 
  }
  let loading:boolean;
  let error:string;
  fetchData()
      .subscribe({
        next: (data:any) => {
          data = data;
          
          console.log(data);
         loading = true;
         console.log(loading);
        },
        error: (err:any) => {
          error = err.message;
          console.log(error);
          loading = false;
          console.log(loading);
        },
      });

      const observable2=new Observable(
     (res:any)=>{
 setTimeout(()=>{
     res.next('rxjs call method 1');
     res.next('rxjs call method 2');
     res.next('rxjs call method 3');
     res.next();
 },1000);
      });
 observable2.pipe(
     filter((res:any)=>res=='rxjs call method 1'),
     map((res:any)=>res="objservable "+res)
 ).subscribe((res:any)=>console.log(res));

        // operators:
        // switchMap: Cancels previous inner Observables when a new value is emitted by the source Observable.
        // concatMap: Subscribes to the inner Observables one by one, waiting for each to complete before subscribing to the next.
        // debounceTime: Suppresses frequent emissions, emitting only the last value within a specified time window.
        // take: Emits only the first 'n' values emitted by the source Observable.
        // takeUntil: Subscribes and operates on values from the source Observable until another Observable emits a value.
      
        // rxjs subject and bhaviroal subject.



const delays$ = of(1000, 2000, Infinity, 3000);
 
delays$.pipe(
  concatMap((ms:any) => {
    if (ms < 10000) {
      return timer(ms);
    } else {
      // Cleaner and easier to read for most folks.
     // throw new Error(`Invalid time ${ ms }`);
     return throwError(() => new Error(`Invalid time ${ ms }`));
    }
  })
)
.subscribe({
  next: console.log,
  error: console.error
});