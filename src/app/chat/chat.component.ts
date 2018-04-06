import { Component, OnInit, Input } from '@angular/core';
import { ChatModel } from './chat.model';
import { windowTime } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @Input() chat: ChatModel;
  window: any;
  constructor() { }

  ngOnInit() {
    this.window = window;
  }

}
