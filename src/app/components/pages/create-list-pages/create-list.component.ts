import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { ListItemsInterface } from "../../../interfaces/list-items";
import { $e } from "@angular/compiler/src/chars";
import { LocalStorageService, SHOP_ITEMS } from "../../../services/local-storage.service";

export const GENERATE_UNIQ_ID = () => Math.floor(Math.random() * 100);

@Component({
  selector: 'create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.scss']
})
export class CreateListComponent implements OnInit {

  listItems: Array<ListItemsInterface> = this.localStorageService.getStorageItem(SHOP_ITEMS) || [];

  myGroup = this.fb.group({
    newItem: new FormControl(
      '', [Validators.required, Validators.minLength(3)]
    )
  });

  constructor(private fb: FormBuilder,
              private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
  }

  createItem() {
    if (this.myGroup.valid) {
      const newItemOfList = {
        title: this.myGroup.value.newItem,
        date: new Date().toJSON(),
        price: 0,
        count: 1,
        id: GENERATE_UNIQ_ID(),
        isDone: false
      };
      this.listItems.push(newItemOfList);
      this.myGroup.get('newItem')?.patchValue('');
    }

  }

  removeItem($event: number) {
    this.listItems = this.listItems.filter(item => item.id !== $event);
  }

  saveItem($event: ListItemsInterface) {
    this.localStorageService.setStorage(SHOP_ITEMS, this.listItems);
  }
}
