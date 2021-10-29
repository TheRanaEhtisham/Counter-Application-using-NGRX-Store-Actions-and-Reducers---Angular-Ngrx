import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIcrement } from '../state/counter.actions';
import { counterState } from '../state/counter.state';

@Component({
  selector: 'app-custome-counter-input',
  templateUrl: './custome-counter-input.component.html',
  styleUrls: ['./custome-counter-input.component.css'],
})
export class CustomeCounterInputComponent implements OnInit {
  value: number;
  constructor(private store: Store<{ counter: counterState }>) {}

  ngOnInit(): void {}

  onAdd() {
    this.store.dispatch(customIcrement({ count: +this.value }));
  }
}
