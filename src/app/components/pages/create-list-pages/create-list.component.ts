import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { ListItemsInterface } from "../../../interfaces/list-items";

export const GENERATE_UNIQ_ID = () => Math.floor(Math.random() * 100);

@Component({
  selector: 'create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.scss']
})
export class CreateListComponent implements OnInit {

  listItems: Array<ListItemsInterface> = [];

  myGroup = this.fb.group({
    newItem: new FormControl(
      '', [Validators.required, Validators.minLength(3)]
    )
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  createItem() {
    if (this.myGroup.valid) {
      const newItemOfList = {
        title: this.myGroup.value.newItem,
        date: new Date().toJSON(),
        price: 0,
        quality: 1,
        id: GENERATE_UNIQ_ID(),
        isDone: false
      };
      console.log(newItemOfList);
      this.listItems.push(newItemOfList);
    }

  }
}
