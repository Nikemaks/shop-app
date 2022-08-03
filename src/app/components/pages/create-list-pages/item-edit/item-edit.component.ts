import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ListItemsInterface, TYPE_SPENDING } from "../../../../interfaces/list-items";
import { UntypedFormBuilder, UntypedFormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss']
})
export class ItemEditComponent implements OnInit {
  @Input() editItem!: ListItemsInterface;
  @Input() listItems!: ListItemsInterface[];
  @Output() removeItem = new EventEmitter<number>();
  @Output() saveItem = new EventEmitter<number>();

  formGroup = this.fb.group({
    price: new UntypedFormControl('', [Validators.required]),
    count: new UntypedFormControl('', [Validators.required]),
    type: new UntypedFormControl('Food')
  })
  typeSpending = TYPE_SPENDING;

  constructor(private fb: UntypedFormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup.patchValue(this.editItem);
    this.formGroup.valueChanges.subscribe(value => {
      this.countValue();
    })
  }

  countValue() {
    return this.formGroup.get('price')?.value * this.formGroup.get('count')?.value;
  }

  save() {
    this.editItem = Object.assign(this.editItem, {
      price: this.formGroup.get('price')?.value,
      count: this.formGroup.get('count')?.value,
      type: this.formGroup.get('type')?.value,
    });
    this.saveItem.emit();
  }

  remove() {
    this.removeItem.emit(this.editItem.id);
  }
}
