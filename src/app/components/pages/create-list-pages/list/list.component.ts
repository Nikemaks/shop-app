import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ListItemsInterface } from "../../../../interfaces/list-items";
import { FormBuilder, FormControl } from "@angular/forms";

@Component({
  selector: 'list-items',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() item!: ListItemsInterface;
  @Output() removeItemList = new EventEmitter<number>();
  isEdit = false;
  formGroup = this.fb.group({
      isDoneControl: new FormControl(false)
    }
  );

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe(value => {
      this.item.isDone = value.isDoneControl;
    });
  }

  removeItem($event: number) {
    this.removeItemList.emit($event);
  }
}
