import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Odd-Even Game';
  odds: number[] = [];
  evens: number[] = [];

  onChangedCounter(data: {value: number}) {
    const val = data.value;
    if (val % 2 === 0) {
      this.evens.push(val);
      console.log('AppComponent.onChangedCounter(): push even: ' + val +
        ' size = ' + this.evens.length);
    } else {
      this.odds.push(val);
      console.log('AppComponent.onChangedCounter(): push odd: ' + val +
        ' size = ' + this.odds.length);

    }
  }
}
