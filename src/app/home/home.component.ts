import { Component, OnInit } from '@angular/core';
import { TopicService } from './topics.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[TopicService]
})
export class HomeComponent implements OnInit {
  //  employees =[];
  topics=[];
  constructor(private _topicService:TopicService) { }

   ngOnInit() {
    this._topicService.getTopics().subscribe(resEmpData => this.topics = resEmpData);
  // this.topics=this._topicService.getTopics()
  }

}
