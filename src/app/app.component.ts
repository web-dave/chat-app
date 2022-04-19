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
    'wss://demo.piesocket.com/v3/channel_1?api_key=oCdCMcMPQpbvNjUIzqtvF1d2X2okWpDQj4AwARJuAgtjhzKxVEjQU6IdCjwm&notify_self';
  socket$$ = new WebSocketSubject<string>({
    url: this.wss,
    deserializer: (e: MessageEvent) => e.data,
  });
  sendMsg(input: HTMLInputElement) {
    const myMsg: IMsg = {
      name: 'Dave',
      msg: input.value,
    };
    this.socket$$.next(JSON.stringify(myMsg));
    this.messages.push(myMsg);

    input.value = '';
    console.table(myMsg);
  }
  ngOnInit(): void {
    this.socket$$
      .pipe(
        filter((data) => data.includes('msg') && data.includes('name')),
        map((data: string) => JSON.parse(data) as IMsg),
        tap((data) => console.table(data))
      )
      .subscribe((data) => {
        if (data.msg) {
          this.messages.push(data);
          console.log(this.stream.nativeElement);
          setTimeout(() => {
            const div = this.stream.nativeElement;

            div.scrollTop = div.scrollHeight;
          }, 1);
        }
      });
  }
}
