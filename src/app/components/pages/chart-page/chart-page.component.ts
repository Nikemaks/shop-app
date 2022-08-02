import { Component, OnInit } from '@angular/core';
import { ChartType } from "angular-google-charts";

@Component({
  selector: 'app-chart-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.scss']
})
export class ChartPageComponent implements OnInit {

  chart = {
    title: 'Title',
    type: ChartType.PieChart,
    data: [ ['London', 8136000],
      ['New York', 8538000],
      ['Paris', 2244000],
      ['Berlin', 3470000],
      ['Kairo', 19500000]],
    columnNames: ['', ''],
    options: {}
  }
  constructor() { }

  ngOnInit(): void {
  }

}
