//HTTP通信を行うためのAngularのサービスを作成
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }

  getMessage(callback: (msg: string) => void): void {
    // API GatewayとHTTP通信して、取得成功時にコールバックを行なう
    this.http.get('API GatewayのURL', {
      headers: new HttpHeaders().set('x-api-key', 'APIキー')
    }).subscribe(data => {
      callback(data['message']);
    });
  }
}
