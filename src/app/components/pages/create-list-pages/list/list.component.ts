import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ListItemsInterface } from "../../../../interfaces/list-items";
import { UntypedFormBuilder, UntypedFormControl } from "@angular/forms";

@Component({
  selector: 'list-items',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() item!: ListItemsInterface;
  @Output() removeItemList = new EventEmitter<number>();
  @Output() save = new EventEmitter<any>();

  isEdit = false;
  formGroup = this.fb.group({
      isDoneControl: new UntypedFormControl(false)
    }
  );

  constructor(private fb: UntypedFormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup.patchValue({isDoneControl: this.item.isDone})
    this.formGroup.valueChanges.subscribe(value => {
      this.item.isDone = value.isDoneControl;
    });
  }

  removeItem($event: number) {
    this.removeItemList.emit($event);
  }

  saveItem() {
    this.save.emit(this.item);
  }
}
