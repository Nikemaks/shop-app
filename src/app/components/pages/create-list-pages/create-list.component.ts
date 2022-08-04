import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from "@angular/forms";
import { ListItemsInterface } from "../../../interfaces/list-items";
import { LocalStorageService, SHOP_ITEMS } from "../../../services/local-storage.service";

export const GENERATE_UNIQ_ID = () => Math.floor(Math.random() * 100);

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.scss']
})
export class CreateListComponent implements OnInit {

  listItems: Array<ListItemsInterface> = this.localStorageService.getStorageItem(SHOP_ITEMS) || [];

  myGroup = this.fb.group({
    newItem: new UntypedFormControl(
      '', [Validators.required, Validators.minLength(3)]
    )
  });

  constructor(private fb: UntypedFormBuilder,
              private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
  }

  createItem() {
    if (this.myGroup.valid) {
      const newItemOfList = {
        title: this.myGroup.value.newItem,
        date: new Date().toJSON(),
        price: 1,
        count: 1,
        id: GENERATE_UNIQ_ID(),
        isDone: false,
        type: 'Food'
      };
      this.listItems.push(newItemOfList);
      this.myGroup.get('newItem')?.patchValue('');
      this.saveItem();
    }

  }

  removeItem($event: number) {
    this.listItems = this.listItems.filter(item => item.id !== $event);
    this.saveItem();
  }

  saveItem() {
    this.localStorageService.setStorage(SHOP_ITEMS, this.listItems);
  }
}
