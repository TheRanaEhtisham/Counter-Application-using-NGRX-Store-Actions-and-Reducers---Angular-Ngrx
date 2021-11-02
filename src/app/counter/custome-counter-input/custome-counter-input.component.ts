import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { changeChannelName, customIcrement } from '../state/counter.actions';
import { getChannelName } from '../state/counter.selectors';

@Component({
  selector: 'app-custome-counter-input',
  templateUrl: './custome-counter-input.component.html',
  styleUrls: ['./custome-counter-input.component.css'],
})
export class CustomeCounterInputComponent implements OnInit {
  value: number;
  channelName: string;
  channelName$: Observable<string>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.channelName$ = this.store.select(getChannelName);
    // .subscribe((channelName) => {
    //   this.channelName = channelName;
    // });
  }

  onAdd() {
    this.store.dispatch(customIcrement({ count: +this.value }));
  }

  onChangeChannelName() {
    this.store.dispatch(changeChannelName({ channelName: 'Rana Jee Channel' }));
  }
}
