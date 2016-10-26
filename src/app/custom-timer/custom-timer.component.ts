import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-custom-timer',
  templateUrl: './custom-timer.component.html',
  styleUrls: [ './custom-timer.component.css' ]
})
export class CustomTimerComponent implements OnInit {

  @Output()
  tick = new EventEmitter();

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.tick.emit(new Date())
    }, 1000);
  }

}
