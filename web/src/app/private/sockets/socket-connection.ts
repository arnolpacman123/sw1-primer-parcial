import { EventEmitter, Injectable, Output } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class SocketConnection extends Socket {

  @Output() outEvent: EventEmitter<any> = new EventEmitter();
  constructor() {
    super({
      url: 'https://primer-parcial-api.herokuapp.com/connection',
    });
    this.listen();
  }

  listen = () => {
    this.ioSocket.on('message', (res: any) => this.outEvent.emit(res));   
  }

  emitEvent = (payload = {}) => {
    this.ioSocket.emit('message', payload);
  }
}
