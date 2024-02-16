import {Component, OnInit} from '@angular/core';
import {Moment} from 'moment';
import {People} from '../models/people';
import {PeoplesService} from '../services/people.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  initialDate: Moment;
  finalDate: Moment;
  earning: number = 0;
  out: number = 0;
  saving: number = 0;
  peoples: People[];

  constructor(private service: PeoplesService) {
  }

  ngOnInit(): void {
    this.service.getPeoples().subscribe(resposta => {
      this.peoples = resposta;
      this.filterValueClientByType();
    });

  }

  filterValueClientByType() {

  }
}
