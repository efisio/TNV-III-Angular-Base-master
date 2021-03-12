import { Component, Input, OnInit } from '@angular/core';
import { StatisticalCard } from 'src/app/models/statisticalCard.model';

@Component({
  selector: 'app-statistical-card',
  templateUrl: './statistical-card.component.html',
  styleUrls: ['./statistical-card.component.css']
})
export class StatisticalCardComponent implements OnInit {

  @Input() statisticalCardData: StatisticalCard;

  title: string;
  data: number;
  incremental: number;
  class : string;
  icon : string;

  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges() {
    this.populateCards();
  }

  populateCards(){

    // console.log(this.statisticalCardData);

    this.title = this.statisticalCardData.title;
    this.data = this.statisticalCardData.data;
    this.class = this.statisticalCardData.class;
    this.icon = this.statisticalCardData.icon;
  }
}
