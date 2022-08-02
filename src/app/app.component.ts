import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { filter, map, tap } from 'rxjs';
import { WebSocketSubject } from 'rxjs/webSocket';

export interface IMsg {
  name: string;
  msg: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('stream') stream!: ElementRef<HTMLDivElement>;
  messages: IMsg[] = [];
  wss =
    'wss://demo.piesocket.com/v3/channel_1?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self';
  socket$$ = new WebSocketSubject<string>({
    url: this.wss,
    deserializer: (e: MessageEvent) =>
      e.data.includes('{') ? JSON.parse(e.data) : e.data,
  });
  sendMsg(input: HTMLInputElement) {
    const myMsg: IMsg = {
      name: 'Dave',
      msg: input.value,
    };
    this.socket$$.next(JSON.stringify(myMsg));
    // this.messages.push(myMsg);

    input.value = '';
    console.table(myMsg);
  }
  ngOnInit(): void {
    this.socket$$
      .pipe(
        filter((data) => data.includes('msg') && data.includes('name')),
        tap((data) => console.log('1', data))
        // map((data: string) => data.replace(/\\"/g, '"')),
        // map((data: string) => data.substring(1, data.length - 1))
      )
      .subscribe((data) => {
        console.log(data);
        const obj = JSON.parse(data);
        console.log(obj);
        // console.log('3', { name: 'Dave', msg: 'sdfsfw' });
        this.messages.push(obj);
        // console.log(this.stream.nativeElement);
        setTimeout(() => {
          const div = this.stream.nativeElement;

          div.scrollTop = div.scrollHeight;
        }, 1);
      });
  }
}
