import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TopicModel } from './topic.model';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {
  @Input() topics: TopicModel[];
  @Output() onItemSelected: EventEmitter<TopicModel> = new EventEmitter<TopicModel>();
  selectedTopic: TopicModel;
  constructor() { }

  ngOnInit() {
  }

  selectTopic(topic: TopicModel) {
    this.selectedTopic = topic;
    this.onItemSelected.next(this.selectedTopic);
  }
}
