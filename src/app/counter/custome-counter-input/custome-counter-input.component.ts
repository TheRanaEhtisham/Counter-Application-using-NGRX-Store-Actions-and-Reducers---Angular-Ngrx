import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeChannelName, customIcrement } from '../state/counter.actions';
import { counterState } from '../state/counter.state';

@Component({
  selector: 'app-custome-counter-input',
  templateUrl: './custome-counter-input.component.html',
  styleUrls: ['./custome-counter-input.component.css'],
})
export class CustomeCounterInputComponent implements OnInit {
  value: number;
  channelName: string;

  constructor(private store: Store<{ counter: counterState }>) {}

  ngOnInit(): void {
    this.store.select('counter').subscribe((data) => {
      this.channelName = data.channelName;
    });
  }

  onAdd() {
    this.store.dispatch(customIcrement({ count: +this.value }));
  }

  onChangeChannelName() {
    this.store.dispatch(changeChannelName({ channelName: 'Rana Jee Channel' }));
  }
}
