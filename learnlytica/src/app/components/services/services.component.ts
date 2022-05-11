import { AfterViewChecked, AfterViewInit, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit, AfterViewChecked {
  data = 'THBS';

  constructor() {
    console.log(`new - data is ${this.data}`);
  }

  ngOnChanges() {
    console.log(`ngOnChanges - data is ${this.data}`);
  }

  ngOnInit() {
    console.log(`ngOnInit  - data is ${this.data}`);
  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }



  ngAfterViewInit() {

    console.log("ngAfterViewInit");

  }
  ngAfterViewChecked() {

    console.log("ngAfterViewChecked");

  }

  ngOnDestroy() {

    console.log("ngOnDestroy");

  }
}
