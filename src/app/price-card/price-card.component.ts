import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.css']
})
export class PriceCardComponent implements OnInit {
  @Input() price:string="";
  @Input() name:string="";
  @Input() features:any=[];
  @Input() features_muted:any=[];

  constructor() { }

  ngOnInit(): void {
  }

}
