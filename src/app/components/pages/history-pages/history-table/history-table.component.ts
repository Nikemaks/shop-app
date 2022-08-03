import { Component } from '@angular/core';
import { HistoryDateInterface, ListItemsInterface } from "../../../../interfaces/list-items";
import { LocalStorageService, SHOP_ITEMS } from "../../../../services/local-storage.service";

@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.scss']
})
export class HistoryTableComponent {
  groupArrays: HistoryDateInterface[] = this.parseDateForHistory();

  constructor(private localStorageService: LocalStorageService) {
  }

  parseDateForHistory() {
    const listItems: Array<ListItemsInterface> = this.localStorageService.getStorageItem(SHOP_ITEMS);
    let finalObj: { [index: string]: Array<ListItemsInterface> } = {};
    listItems.forEach((purchases) => {
      const date = purchases.date.split('T')[0];
      if (finalObj[date]) {
        finalObj[date].push(purchases);
      } else {
        finalObj[date] = [purchases];
      }
    });

    return Object.keys(finalObj).map((date) => {
      return {
        date,
        purchases: finalObj[date]
      };
    });
  }

}
