import { Component, Input, OnInit } from '@angular/core';
import { IMsg } from '../app.component';

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.scss'],
})
export class MsgComponent implements OnInit {
  @Input() message: IMsg = { name: '', msg: '' };
  constructor() {}

  ngOnInit(): void {}
}
