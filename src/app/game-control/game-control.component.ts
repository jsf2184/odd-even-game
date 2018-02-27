import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  counter: number;
  gameStarted: boolean;
  intervalId;
  @Output() changedCounter = new EventEmitter<{value: number}>();

  constructor() {
    this.gameStarted = false;
  }

  ngOnInit() {
    this.counter = 0;
  }

  onStart() {
    this.counter = 0;
    console.log('GameControlComponent.onStart() entered, counter = ' + this.counter);
    this.gameStarted = true;
    this.intervalId = setInterval(() => this.onIncrement(), 2000);
    // this.intervalId = setInterval(this.onIncrement(), 2000);
  }

  onFinish() {
    console.log('GameControlComponent.onFinish() entered');
    this.gameStarted = false;
    clearInterval(this.intervalId);
  }

  onIncrement() {
    this.counter++;
    console.log('GameControlComponent.onIncrement() entered, counter = ' + this.counter);
    this.changedCounter.emit({value: this.counter});
  }
}
