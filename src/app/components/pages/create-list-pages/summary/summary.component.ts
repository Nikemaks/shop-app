import { Component, Input, OnInit } from '@angular/core';
import { ListItemsInterface } from "../../../../interfaces/list-items";

@Component({
  selector: 'summary-view',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  @Input() list!: ListItemsInterface[];
  constructor() { }

  ngOnInit(): void {
  }

  countTotalPrice() {
    return this.list.reduce((memo, item) => {
      return (item.price * item.count) + memo;
    }, 0)
  }
}
