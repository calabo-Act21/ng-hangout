import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { TopicModel } from '../topics/topic.model';

@Injectable()
export class ChatRoomService {
    constructor(private httpClient: HttpClient) { }

    getTopics(): Observable<TopicModel[]> {
        return this.httpClient.get<TopicModel[]>('assets/mocks/topics.json').pipe(
            map(res => res.map(item => new TopicModel(item)))
        );
    }
}
