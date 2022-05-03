import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'chat-app';
  initTitle = '';
  constructor(private service: Title) {
    this.initTitle = service.getTitle();
    service.setTitle(this.initTitle + ' ' + 'New stuff');
  }
}
