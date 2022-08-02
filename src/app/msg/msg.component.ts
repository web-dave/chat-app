import { Component, Input, OnInit } from '@angular/core';
import { IMsg } from '../app.component';

@Component({
  selector: 'app-msg',
  template: ` <div class="container">
    <p>{{ message.msg }}</p>
    <span class="time-right">{{ message.name }}</span>
  </div>`,
})
export class MsgComponent implements OnInit {
  message: IMsg = { name: 'Dave', msg: 'Moin loide' };
  constructor() {}

  ngOnInit(): void {}
}
