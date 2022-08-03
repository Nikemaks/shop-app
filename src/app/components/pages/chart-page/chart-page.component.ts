import { Component, OnInit } from '@angular/core';
import { ChartType } from "angular-google-charts";
import { ListItemsInterface } from "../../../interfaces/list-items";
import { LocalStorageService, SHOP_ITEMS } from "../../../services/local-storage.service";

@Component({
  selector: 'app-chart-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.scss']
})
export class ChartPageComponent implements OnInit {

  chart = {
    title: 'Title',
    type: ChartType.PieChart,
    data: [['London', 8136000],
      ['New York', 8538000],
      ['Paris', 2244000],
      ['Berlin', 3470000],
      ['Kairo', 19500000]],
    columnNames: ['', ''],
    options: {}
  }

  constructor(private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
    const listItems: Array<ListItemsInterface> = this.localStorageService.getStorageItem(SHOP_ITEMS);
    let finalObj: { [index: string]: Array<ListItemsInterface> } = {}
    listItems.forEach((purchases) => {
      if (finalObj[purchases.type]) {
        finalObj[purchases.type].push(purchases);
      } else {
        finalObj[purchases.type] = [purchases];
      }
    });

    let chartDate: Array<Array<string | number>> = [];
    Object.keys(finalObj).forEach(title => {
      const price = finalObj[title].reduce((memo, item) => {
        return memo + (item.price * item.count);
      }, 0);

      chartDate.push([
        title,
        price
      ])
    })

    this.chart.data = chartDate;
  }

}
