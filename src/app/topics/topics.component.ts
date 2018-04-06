import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TopicModel } from './topic.model';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {
  @Input() topics: TopicModel[];
  @Output() onSelected: EventEmitter<TopicModel> = new EventEmitter<TopicModel>();
  selectedTopic: TopicModel;
  constructor() { }

  ngOnInit() {
  }

  selectTopic(topic: TopicModel) {
    this.selectedTopic = topic;
    this.onSelected.next(this.selectedTopic);
  }
}
