import { Component, OnInit, Input } from '@angular/core';
import { TopicModel } from './topic.model';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {
  @Input() topics: TopicModel[];
  constructor() { }

  ngOnInit() {
  }

}
