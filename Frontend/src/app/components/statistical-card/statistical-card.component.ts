import { Component, Input, OnInit } from '@angular/core';
import { StatisticalCard } from 'src/app/models/statisticalCard.model';

@Component({
  selector: 'app-statistical-card',
  templateUrl: './statistical-card.component.html',
  styleUrls: ['./statistical-card.component.css']
})
export class StatisticalCardComponent implements OnInit {

  @Input() statisticalCardDatata: StatisticalCard;

  title: string;
  data: number;
  incremental: number;
  class : string;
  icon : string;

  constructor() { }

  ngOnInit(): void {
    this.title = this.statisticalCardDatata.title;
    this.data = this.statisticalCardDatata.data;
    this.class = this.statisticalCardDatata.class;
    this.icon = this.statisticalCardDatata.icon;
  }
}
