import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {

  constructor(private appService: AppService) { }

  title = 'my-app';

  ngOnInit(): void {
    this.appService.getMessage(msg => {
      this.title = msg;  // HTTP通信成功時にタイトルに取得したメッセージを表示する
    })
}
