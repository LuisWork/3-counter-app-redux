import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../../store/items.action';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  title: string = 'Contador usando Redux para manejar el estado';
  counter: number;

  constructor(private store: Store<{ counter: number }>) {
    this.counter = 0;
    this.store.select('counter').subscribe((counter) => {
      this.counter = counter;
    });
  }

  increment(): void {
    this.store.dispatch(increment({ add: 10 }));
  }

  decrement(): void {
    this.store.dispatch(decrement());
  }

  reset(): void {
    this.store.dispatch(reset());
  }
}
