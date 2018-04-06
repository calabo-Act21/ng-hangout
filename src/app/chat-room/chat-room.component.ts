import { Component, OnInit } from '@angular/core';
import { TopicModel } from '../topics/topic.model';
import { ChatRoomService } from './chat-room.service';
import { ChatModel } from '../chat/chat.model';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {
  topics: TopicModel[];
  chat: ChatModel;
  constructor(private api: ChatRoomService) { }

  ngOnInit() {
    this.api.getTopics().subscribe(topics => this.topics = topics);
  }

  onTopicSelected(topic: TopicModel) {
    this.api.getTopicMessages(topic).subscribe(chat => this.chat = chat);
  }
}
