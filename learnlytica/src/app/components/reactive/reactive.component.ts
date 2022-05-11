import { Component, OnInit } from '@angular/core';
import { from, interval, last, of, Subscriber, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  myObs$? : Subscription;
  myObs2$:any;

  constructor() { }

  ngOnInit(): void {
    // // interval(10).subscribe(val => console.log('I am observable stream value ${val}'));
    // this.myObs2$=of(1, 2 , 4, 5,10 ,100);

    // this.myObs2$.subscribe(
    //   (val:Number) => console.log('I am of --> obs stream value->${val}')
    // )

    // from([1,10,2,20]).subscribe(
    //   (val:Number) => console.log('I am from ---> obs stream value -> ${val}')
    // )

    const obsT1 = interval(1000);
    const onlyFirstTen = obsT1.pipe(
      take(10),
      last()
    );
    onlyFirstTen.subscribe(
      (val:Number) =>console.log('Operation with take operator -> ${val}')
    )
  }

  ngOnDestroy() : void{
    console.log('from destroy')
    this.myObs$?.unsubscribe;
    this.myObs2$.unsubscribe;
  }

}
