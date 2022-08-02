import { Component, OnInit } from '@angular/core';
import { ListItemsInterface } from "../../../../interfaces/list-items";
import { LocalStorageService, SHOP_ITEMS } from "../../../../services/local-storage.service";

@Component({
  selector: 'history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.scss']
})
export class HistoryTableComponent implements OnInit {

  listItems: Array<ListItemsInterface> = this.localStorageService.getStorageItem(SHOP_ITEMS) || [];

  constructor(private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
  }

}
