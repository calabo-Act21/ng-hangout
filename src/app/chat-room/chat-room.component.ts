import { Component, OnInit } from '@angular/core';
import { TopicModel } from '../topics/topic.model';
import { ChatRoomService } from './chat-room.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {
  topics: TopicModel[];
  constructor(private api: ChatRoomService) { }

  ngOnInit() {
    this.api.getTopics().subscribe(topics => this.topics = topics);
  }
}
