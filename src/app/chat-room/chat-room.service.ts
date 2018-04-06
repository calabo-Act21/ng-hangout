import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { TopicModel } from '../topics/topic.model';
import { ChatMessageModel } from '../chat/chat-message.model';

@Injectable()
export class ChatRoomService {
    constructor(private httpClient: HttpClient) { }

    getTopics(): Observable<TopicModel[]> {
        return this.httpClient.get<TopicModel[]>('assets/mocks/topics.json').pipe(
            map(res => res.map(item => new TopicModel(item)))
        );
    }

    getTopicMessages(topic: TopicModel): Observable<ChatMessageModel[]> {
        return Observable.of([
            new ChatMessageModel({ author: 'You', date: new Date(), content: 'Hello There ' + topic.title + ' !' }),
            new ChatMessageModel({ author: 'You', date: new Date(), content: 'How are you ?' }),
            new ChatMessageModel({ author: topic.title, date: new Date(), content: topic.lastMessage })
        ]);
    }
}
