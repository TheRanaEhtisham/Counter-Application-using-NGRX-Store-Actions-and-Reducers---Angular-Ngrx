import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getCounter } from '../state/counter.selectors';
import { counterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit {
  // counter: number;
  counter$: Observable<number>;

  constructor(private store: Store<{ counter: counterState }>) {}

  ngOnInit(): void {
    // this.counter$ = this.store.select('counter');
    this.counter$ = this.store.select(getCounter);
    // .subscribe((counter) => {
    //   this.counter = counter;
    // });
  }
}
