import { InjectableCompiler } from '@angular/compiler/src/injectable_compiler';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, pairwise, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.foo.subscribe();
  }
  title = 'chat-app';
  timeline: string[] = [];
  last: [string, string] = ['', 'initial'];

  state = new BehaviorSubject<string>('initial');
  foo = this.state.pipe(
    tap((daten) => this.timeline.push(daten)),
    pairwise(),
    tap((data) => (this.last = data))
  );

  data =
    'Baumhaus Videokassette Katzenminze Kaputte-Wanduhr Coladeckel LCD-Display Knisterfolie Dreieckigesquadrat Wandteppich Wurzelkabel Gardinenschlaufe Ecke Wirelesslankabel Pizzakarton Brotmesser GLitzer-CD'.split(
      ' '
    );
  // state2 = new ReplaySubject<string>(2);
  send() {
    const randomNumber = Math.floor(Math.random() * this.data.length);
    console.log(randomNumber, this.data[randomNumber]);
    this.state.next(this.data[randomNumber]);
  }
  reset() {
    if (this.timeline.length === 1) {
      return;
    }
    this.timeline.pop();
    // this.timeline.at(-1); //Yay2022
    const rollbackVAlue = this.timeline[this.timeline.length - 1];
    this.timeline.pop();
    this.state.next(rollbackVAlue);
  }
}
