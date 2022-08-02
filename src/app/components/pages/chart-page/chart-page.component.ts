import { Component, OnInit } from '@angular/core';
import { ChartType } from "angular-google-charts/lib/types/chart-type";

@Component({
  selector: 'app-chart-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.scss']
})
export class ChartPageComponent implements OnInit {

  chart = {
    title: 'Title',
    type: ChartType.PieChart,
    data: [],
    columnNames: ['', ''],
    options: {}
  }
  constructor() { }

  ngOnInit(): void {
  }

}
